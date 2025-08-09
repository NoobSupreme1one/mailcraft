import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const tpl = await db.template.findUnique({ where: { id: params.id } });
  if (!tpl) return new NextResponse("Not found", { status: 404 });
  return NextResponse.json(tpl);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { userId } = auth();
  if (!userId) return new NextResponse("Unauthorized", { status: 401 });
  const existing = await db.template.findUnique({ where: { id: params.id } });
  if (!existing) return new NextResponse("Not found", { status: 404 });
  if (existing.ownerId && existing.ownerId !== userId)
    return new NextResponse("Forbidden", { status: 403 });

  const body = await req.json();
  const { title, html, designJson, isPublished } = body ?? {};
  const updated = await db.template.update({
    where: { id: params.id },
    data: { title, html, designJson, isPublished },
  });
  return NextResponse.json(updated);
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  const { userId } = auth();
  if (!userId) return new NextResponse("Unauthorized", { status: 401 });
  const existing = await db.template.findUnique({ where: { id: params.id } });
  if (!existing) return new NextResponse("Not found", { status: 404 });
  if (existing.ownerId !== userId) return new NextResponse("Forbidden", { status: 403 });
  await db.template.delete({ where: { id: params.id } });
  return new NextResponse(null, { status: 204 });
}