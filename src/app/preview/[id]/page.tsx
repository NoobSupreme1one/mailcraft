import { db } from "@/lib/db";

export default async function PreviewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tpl = await db.template.findUnique({ where: { id } });
  if (!tpl) return <div className="p-6">Not found</div>;
  return (
    <div className="p-0">
      <iframe className="w-full min-h-[90vh]" srcDoc={tpl.html} />
    </div>
  );
}
