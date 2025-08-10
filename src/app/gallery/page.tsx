import { db } from "@/lib/db";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type GallerySearch = { q?: string; category?: string };

export default async function GalleryPage({ searchParams }: { searchParams?: GallerySearch }) {
  const q = searchParams?.q?.trim() ?? "";
  const category = searchParams?.category?.trim() || undefined;
  const where: { isPublished: true; category?: string; title?: { contains: string } } = { isPublished: true };
  if (category) where.category = category;
  if (q) where.title = { contains: q };
  const templates = await db.template.findMany({ where, orderBy: { updatedAt: "desc" }, take: 60 });
  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">Template Gallery</h1>
          <p className="text-sm text-neutral-500">Pick a template to start</p>
        </div>
        <form className="flex flex-wrap gap-2" action="/gallery" method="get">
          <Input name="q" placeholder="Search by title" defaultValue={q} className="max-w-xs" />
          <select name="category" defaultValue={category ?? ""} className="border rounded-md text-sm h-10 px-2">
            <option value="">All categories</option>
            <option value="Outreach">Outreach</option>
            <option value="Sales">Sales</option>
            <option value="Billing">Billing</option>
            <option value="Onboarding">Onboarding</option>
            <option value="Status">Status</option>
            <option value="Marketing">Marketing</option>
            <option value="Legal">Legal</option>
            <option value="PM">PM</option>
            <option value="Support">Support</option>
            <option value="Relationship">Relationship</option>
            <option value="Retention">Retention</option>
          </select>
          <Button type="submit" variant="outline">Filter</Button>
        </form>
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