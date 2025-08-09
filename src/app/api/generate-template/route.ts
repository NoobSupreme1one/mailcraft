import Anthropic from "@anthropic-ai/sdk";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { userId } = auth();
  if (!userId) return new NextResponse("Unauthorized", { status: 401 });
  const { prompt } = await req.json();
  if (!process.env.ANTHROPIC_API_KEY) return new NextResponse("Missing ANTHROPIC_API_KEY", { status: 500 });

  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  const system = `You are an expert email HTML designer. Generate a complete, production-ready responsive email using table-based layout and inline CSS only. No external CSS or JS. Keep width 600px, mobile-friendly. Return ONLY the HTML.`;
  const message = await anthropic.messages.create({
    model: "claude-3-7-sonnet-2025-05-21",
    max_tokens: 4000,
    temperature: 0.7,
    system,
    messages: [
      { role: "user", content: [{ type: "text", text: `Create an email for: ${prompt}` }] },
    ],
  });

  const html = message.content
    .filter((c) => c.type === "text")
    .map((c: any) => c.text)
    .join("\n");

  return NextResponse.json({ html });
}