import { GoogleGenerativeAI } from "@google/generative-ai";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { userId } = auth();
  if (!userId) return new NextResponse("Unauthorized", { status: 401 });
  const { prompt } = await req.json();
  const system = `You are an expert email HTML designer. Generate a complete, production-ready responsive email using table-based layout and inline CSS only. No external CSS or JS. Keep width 600px, mobile-friendly. Return ONLY the HTML.`;

  const geminiApiKey = process.env.GEMINI_API_KEY;
  const openrouterApiKey = process.env.OPENROUTER_API_KEY;

  if (!geminiApiKey && !openrouterApiKey) {
    return new NextResponse("Missing GEMINI_API_KEY or OPENROUTER_API_KEY", { status: 500 });
  }

  // Try Gemini first
  if (geminiApiKey) {
    try {
      const genAI = new GoogleGenerativeAI(geminiApiKey);
      const modelId = process.env.GEMINI_MODEL || "gemini-2.0-flash";
      const model = genAI.getGenerativeModel({
        model: modelId,
        systemInstruction: system,
      });

      const result = await model.generateContent({
        contents: [
          { role: "user", parts: [{ text: `Create an email for: ${prompt}` }] },
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 4000,
        },
      });

      const html = result.response.text().trim();
      if (html) {
        return NextResponse.json({ html, provider: "gemini", model: modelId });
      }
    } catch (_) {
      // Fall through to OpenRouter
    }
  }

  // Fallback to OpenRouter if available
  if (openrouterApiKey) {
    try {
      const orModel = process.env.OPENROUTER_MODEL || "openai/gpt-4o-mini";
      const resp = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openrouterApiKey}`,
        },
        body: JSON.stringify({
          model: orModel,
          messages: [
            { role: "system", content: system },
            { role: "user", content: `Create an email for: ${prompt}` },
          ],
          temperature: 0.7,
          max_tokens: 4000,
        }),
      });

      if (!resp.ok) {
        const errText = await resp.text();
        throw new Error(`OpenRouter error ${resp.status}: ${errText}`);
      }

      const data = await resp.json();
      const content = data.choices?.[0]?.message?.content || "";
      const html = Array.isArray(content)
        ? content
            .map((part: any) => (typeof part === "string" ? part : part?.text || ""))
            .join("\n")
        : content;

      if (html) {
        return NextResponse.json({ html, provider: "openrouter", model: orModel });
      }
    } catch (_) {
      // Fall through
    }
  }

  return new NextResponse("AI generation failed", { status: 500 });
}