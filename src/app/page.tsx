import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="space-y-20">
      {/* Hero */}
      <section className="hero-gradient border-b">
        <div className="container py-20 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-slate-600 bg-white/60 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
            New: Variable-aware AI templates
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Automate your outreach with <span className="text-[var(--primary)]">AI</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Start from a gallery of conversion-tested emails, personalize with variables, and generate variants instantly.
          </p>
          <div className="flex gap-3 justify-center">
            <Button asChild className="btn btn-primary"><Link href="/gallery">Browse gallery</Link></Button>
            <Button asChild variant="outline" className="btn btn-outline"><Link href="/new">Generate with AI</Link></Button>
          </div>
        </div>
      </section>

      {/* Feature highlights */}
      <section>
        <div className="container grid gap-6 md:grid-cols-3">
          {[
            { title: 'Variable System', desc: 'Define {{placeholders}} once, preview with sample data, and export.' },
            { title: 'Drag-and-drop Builder', desc: 'Compose responsive emails visually with GrapesJS.' },
            { title: 'AI Drafts', desc: 'Gemini first with OpenRouter fallback for reliable generation.' },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border p-5 bg-white/60 backdrop-blur">
              <div className="h-8 w-8 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] grid place-items-center font-bold">•</div>
              <h3 className="mt-3 font-semibold">{f.title}</h3>
              <p className="text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
