import { NextResponse } from "next/server";
import { premadeTemplates } from "@/data/premadeTemplates";
import { db } from "@/lib/db";

export async function POST() {
  const existing = await db.template.count({ where: { isPublished: true } });
  if (existing > 0) return NextResponse.json({ inserted: 0 });

  const created = await db.$transaction(
    premadeTemplates.map((t) =>
      db.template.create({ data: { title: t.title, html: t.html, category: t.category, isPublished: true } })
    )
  );
  return NextResponse.json({ inserted: created.length });
}