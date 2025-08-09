import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const templates = await db.template.findMany({ where: { isPublished: true }, orderBy: { updatedAt: "desc" }, take: 50 });
  return NextResponse.json(templates);
}