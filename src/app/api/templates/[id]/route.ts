import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const runtime = "nodejs";

export async function GET(_req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { userId } = await auth();
  if (!userId) return new NextResponse("Unauthorized", { status: 401 });

  const { id } = await ctx.params;
  const tpl = await db.template.findUnique({ where: { id } });
  if (!tpl || tpl.ownerId !== userId) return new NextResponse("Not found", { status: 404 });
  return NextResponse.json(tpl);
}

export async function PUT(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { userId } = await auth();
  if (!userId) return new NextResponse("Unauthorized", { status: 401 });

  const { id } = await ctx.params;
  const tpl = await db.template.findUnique({ where: { id } });
  if (!tpl || tpl.ownerId !== userId) return new NextResponse("Not found", { status: 404 });

  const body = await req.json().catch(() => ({}));
  const { title, html, designJson, variableSchema, sampleData, isPublished } = body ?? {};

  const updated = await db.template.update({
    where: { id },
    data: {
      ...(title !== undefined ? { title } : {}),
      ...(html !== undefined ? { html } : {}),
      ...(designJson !== undefined ? { designJson } : {}),
      ...(variableSchema !== undefined ? { variableSchema } : {}),
      ...(sampleData !== undefined ? { sampleData } : {}),
      ...(isPublished !== undefined ? { isPublished } : {}),
    },
  });
  return NextResponse.json(updated);
}
