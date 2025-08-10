// Node 18+ (global fetch). ESM or CJS compatible.
// createChatClient(...) returns { chat(...) }.

const OPENROUTER_API = "https://openrouter.ai/api/v1";
const GEMINI_API = "https://generativelanguage.googleapis.com/v1beta";

export function createChatClient({
  geminiApiKey,
  openrouterApiKey,
  maxRPS = 5, // OR set minIntervalMs instead
  minIntervalMs, // e.g., 200 means at most 5 req/s
  useFreeOnly = true, // iterate only free OpenRouter models
  perModelRetries = 0,
}: {
  geminiApiKey?: string;
  openrouterApiKey?: string;
  maxRPS?: number;
  minIntervalMs?: number;
  useFreeOnly?: boolean;
  perModelRetries?: number;
} = {}) {
  const limiter = createRateLimiter({ maxRPS, minIntervalMs });

  return {
    /**
     * messages: [{role:'user'|'assistant'|'system', content: '...'}, ...]
     * temperature, maxTokens: optional
     */
    async chat({
      messages,
      temperature = 0.7,
      maxTokens,
      geminiModel = "gemini-1.5-flash",
      openrouterHeaders = {}, // e.g., { "HTTP-Referer": "...", "X-Title": "My App" }
      openrouterAllowList = null, // optional: array of model ids to try, overrides discovery
      timeoutMs = 60_000,
    }: {
      messages: Array<{ role: "user" | "assistant" | "system"; content: string }>;
      temperature?: number;
      maxTokens?: number;
      geminiModel?: string;
      openrouterHeaders?: Record<string, string>;
      openrouterAllowList?: string[] | null;
      timeoutMs?: number;
    }) {
      // 1) Try Gemini first
      if (geminiApiKey) {
        await limiter.wait();
        try {
          const out = await callGemini({
            apiKey: geminiApiKey,
            model: geminiModel,
            messages,
            temperature,
            maxTokens,
            timeoutMs,
          });
          return { provider: "gemini" as const, model: geminiModel, response: out };
        } catch (e) {
          // Fall through to OpenRouter
        }
      }

      // 2) Fallback to OpenRouter
      if (!openrouterApiKey) {
        throw new Error("Gemini failed and no OpenRouter API key provided.");
      }

      const models = openrouterAllowList ??
        (await getOpenRouterModels({
          apiKey: openrouterApiKey,
          freeOnly: useFreeOnly,
        }));

      if (!models.length) {
        throw new Error("No OpenRouter models available for fallback.");
      }

      const errors: Array<{ model: string; error: string }> = [];
      for (const model of models) {
        let tries = (perModelRetries ?? 0) + 1;
        while (tries-- > 0) {
          await limiter.wait();
          try {
            const out = await callOpenRouter({
              apiKey: openrouterApiKey,
              model,
              messages,
              temperature,
              maxTokens,
              timeoutMs,
              extraHeaders: openrouterHeaders,
            });
            return { provider: "openrouter" as const, model, response: out };
          } catch (e) {
            if (tries === 0) errors.push({ model, error: String(e) });
          }
        }
      }
      const detail = errors.map((e) => `- ${e.model}: ${e.error}`).join("\n");
      throw new Error(`All OpenRouter fallbacks failed:\n${detail}`);
    },
  };
}

/* ---------- Internals ---------- */

function createRateLimiter({ maxRPS = 5, minIntervalMs }: { maxRPS?: number; minIntervalMs?: number } = {}) {
  const interval = Math.max(0, minIntervalMs ?? Math.floor(1000 / Math.max(1, maxRPS)));
  let last = 0;
  return {
    async wait() {
      const now = Date.now();
      const waitMs = Math.max(0, last + interval - now);
      if (waitMs > 0) await sleep(waitMs);
      last = Date.now();
    },
  };
}
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function toGeminiContents(messages: Array<{ role: string; content: string }>) {
  // Map OpenAI-style messages to Gemini "contents"
  // Gemini wants roles: 'user' or 'model'
  return messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: String(m.content ?? "") }],
  }));
}

async function callGemini({ apiKey, model, messages, temperature, maxTokens, timeoutMs }: {
  apiKey: string;
  model: string;
  messages: Array<{ role: string; content: string }>;
  temperature?: number;
  maxTokens?: number;
  timeoutMs?: number;
}) {
  const url = `${GEMINI_API}/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;
  const body: {
    contents: Array<{ role: string; parts: Array<{ text: string }> }>;
    generationConfig: { temperature?: number; maxOutputTokens?: number };
  } = {
    contents: toGeminiContents(messages),
    generationConfig: {
      temperature,
      ...(maxTokens ? { maxOutputTokens: maxTokens } : {}),
    },
  };
  const res = await fetchWithTimeout(
    url,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    },
    timeoutMs,
  );

  if (!res.ok) {
    const text = await safeText(res);
    throw new Error(`Gemini error ${res.status}: ${text}`);
  }
  return res.json();
}

async function getOpenRouterModels({ apiKey, freeOnly = true }: { apiKey: string; freeOnly?: boolean }) {
  const res = await fetch(`${OPENROUTER_API}/models`, {
    headers: { Authorization: `Bearer ${apiKey}` },
  });
  if (!res.ok) throw new Error(`Failed to list OpenRouter models: ${res.status}`);
  const { data } = await res.json();

  const isZero = (v: unknown) => {
    if (v == null) return false;
    const n = typeof v === "string" ? parseFloat(v) : (v as number);
    return Number.isFinite(n) && n === 0;
  };

  const ids: string[] = [];
  for (const m of data) {
    const id = String(m.id || m.canonical_slug || m.name || "");
    if (!id) continue;
    if (!freeOnly) {
      ids.push(id);
      continue;
    }
    const p = m.pricing || {};
    if (id.includes(":free") || (isZero(p.prompt) && isZero(p.completion))) {
      ids.push(id);
    }
  }
  return ids;
}

async function callOpenRouter({
  apiKey,
  model,
  messages,
  temperature,
  maxTokens,
  timeoutMs,
  extraHeaders = {},
}: {
  apiKey: string;
  model: string;
  messages: Array<{ role: string; content: string }>;
  temperature?: number;
  maxTokens?: number;
  timeoutMs?: number;
  extraHeaders?: Record<string, string>;
}) {
  const url = `${OPENROUTER_API}/chat/completions`;
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
    ...extraHeaders, // e.g., {"HTTP-Referer": "...", "X-Title": "..."}
  };
  const body: {
    model: string;
    messages: Array<{ role: string; content: string }>;
    temperature?: number;
    max_tokens?: number;
  } = {
    model,
    messages,
    temperature,
    ...(maxTokens ? { max_tokens: maxTokens } : {}),
  };
  const res = await fetchWithTimeout(
    url,
    {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    },
    timeoutMs,
  );

  if (!res.ok) {
    const text = await safeText(res);
    throw new Error(`OpenRouter (${model}) error ${res.status}: ${text}`);
  }
  return res.json();
}

async function fetchWithTimeout(url: string, options: RequestInit, timeoutMs = 60_000) {
  const ctrl = new AbortController();
  const id = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: ctrl.signal });
  } finally {
    clearTimeout(id);
  }
}

async function safeText(res: Response) {
  try {
    return await res.text();
  } catch {
    return "";
  }
}




