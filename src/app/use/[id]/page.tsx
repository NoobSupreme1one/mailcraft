import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export default async function UseTemplatePage({ params }: { params: Promise<{ id: string }> }) {
  const { userId } = await auth();
  if (!userId) return null;
  const { id } = await params;
  const tpl = await db.template.findUnique({ where: { id } });
  if (!tpl) return null;
  const copy = await db.template.create({ data: { title: tpl.title, html: tpl.html, designJson: tpl.designJson, ownerId: userId } });
  redirect(`/builder/${copy.id}`);
}
