import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { createChatClient } from "@/lib/aiClient";

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return new NextResponse("Unauthorized", { status: 401 });
  const { prompt } = await req.json();
  const system = `You are an expert email HTML designer. Generate a complete, production-ready responsive email using table-based layout and inline CSS only. No external CSS or JS. Keep width 600px, mobile-friendly. Return ONLY the HTML.`;

  const geminiApiKey = process.env.GEMINI_API_KEY;
  const openrouterApiKey = process.env.OPENROUTER_API_KEY;
  if (!geminiApiKey && !openrouterApiKey) {
    return new NextResponse("Missing GEMINI_API_KEY or OPENROUTER_API_KEY", { status: 500 });
  }

  const client = createChatClient({ geminiApiKey, openrouterApiKey });
  const geminiModel = process.env.GEMINI_MODEL || "gemini-1.5-flash";
  const openrouterModel = process.env.OPENROUTER_MODEL; // optional allowList override

  const messages = [
    { role: "system" as const, content: system },
    { role: "user" as const, content: `Create an email for: ${prompt}` },
  ];

  try {
    const result = await client.chat({
      messages,
      temperature: 0.7,
      maxTokens: 4000,
      geminiModel,
      openrouterAllowList: openrouterModel ? [openrouterModel] : null,
      openrouterHeaders: {
        "HTTP-Referer": process.env.OPENROUTER_HTTP_REFERER || "http://localhost:3000",
        "X-Title": process.env.OPENROUTER_X_TITLE || "Freemail",
      },
    });

    // Normalize to HTML string from common shapes
    let html = "";
    if (result.provider === "gemini") {
      const parts = result.response?.candidates?.[0]?.content?.parts ?? [];
      html = parts
        .map((p: { text?: string } | string) => (typeof p === "string" ? p : p?.text || ""))
        .join("\n")
        .trim();
    } else {
      const content = result.response?.choices?.[0]?.message?.content ?? "";
      html = Array.isArray(content)
        ? content.map((part: { text?: string } | string) => (typeof part === "string" ? part : part?.text || "")).join("\n")
        : content;
    }

    if (!html) return new NextResponse("AI generation failed", { status: 500 });
    return NextResponse.json({ html, provider: result.provider, model: result.model });
  } catch (_e) {
    return new NextResponse("AI generation failed", { status: 500 });
  }
}
