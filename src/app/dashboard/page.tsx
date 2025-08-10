import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const { userId } = auth();
  if (!userId) return null;

  const templates = await db.template.findMany({ where: { ownerId: userId }, orderBy: { updatedAt: "desc" } });

  // actions moved to /new; keeping dashboard read-only for now

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">Your Templates</h1>
        <form action={async () => {
          'use server';
          const id = await db.template.create({ data: { title: 'Untitled', html: '', ownerId: userId } }).then(t => t.id);
          // redirect on client
        }}>
          <Button asChild>
            <Link href="/new">New template</Link>
          </Button>
        </form>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((t) => (
          <li key={t.id} className="border rounded-lg p-3">
            <div className="font-medium mb-2">{t.title}</div>
            <div className="text-xs text-neutral-500 mb-3">{new Date(t.updatedAt).toLocaleString()}</div>
            <div className="flex gap-2">
              <Button asChild size="sm"><Link href={`/builder/${t.id}`}>Edit</Link></Button>
              <Button asChild size="sm" variant="outline"><Link href={`/preview/${t.id}`}>Preview</Link></Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}