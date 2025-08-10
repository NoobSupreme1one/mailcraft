import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const runtime = "nodejs";

export async function GET() {
  const templates = await db.template.findMany({ where: { isPublished: true }, orderBy: { updatedAt: "desc" }, take: 50 });
  return NextResponse.json(templates);
}
