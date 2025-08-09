import { db } from "@/lib/db";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function GalleryPage() {
  const templates = await db.template.findMany({ where: { isPublished: true }, orderBy: { updatedAt: "desc" } });
  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">Template Gallery</h1>
        <p className="text-sm text-neutral-500">Pick a template to start</p>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((t) => (
          <li key={t.id} className="border rounded-lg p-3">
            <div className="font-medium mb-2">{t.title}</div>
            <div className="text-xs text-neutral-500 mb-3">{t.category ?? 'General'}</div>
            <div className="flex gap-2">
              <Button asChild size="sm"><Link href={`/preview/${t.id}`}>Preview</Link></Button>
              <Button asChild size="sm" variant="outline"><Link href={`/use/${t.id}`}>Use this</Link></Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}