import { EmailBuilder } from "@/components/builder/EmailBuilder";

export default function BuilderPage({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div className="max-w-7xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">Builder</h1>
      <EmailBuilder templateId={id} />
    </div>
  );
}