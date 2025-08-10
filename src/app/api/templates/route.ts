import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const { userId } = auth();
  if (!userId) return new NextResponse("Unauthorized", { status: 401 });
  const templates = await db.template.findMany({ where: { ownerId: userId }, orderBy: { updatedAt: "desc" } });
  return NextResponse.json(templates);
}

export async function POST(req: Request) {
  const { userId } = auth();
  if (!userId) return new NextResponse("Unauthorized", { status: 401 });
  const body = await req.json().catch(() => ({}));
  const { title = "Untitled", html = "", designJson = null, variableSchema = null, sampleData = null } = body ?? {};
  const tpl = await db.template.create({ data: { title, html, designJson, variableSchema, sampleData, ownerId: userId, isPublished: false } });
  return NextResponse.json(tpl);
}