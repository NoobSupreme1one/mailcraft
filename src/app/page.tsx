import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">Email templates for freelancers</h1>
        <p className="text-neutral-600">Build with drag-and-drop or generate with AI. Start from 20+ premade templates.</p>
        <div className="flex gap-3 justify-center">
          <Button asChild><Link href="/gallery">Browse gallery</Link></Button>
          <Button asChild variant="outline"><Link href="/new">Generate with AI</Link></Button>
        </div>
      </section>
    </div>
  );
}
