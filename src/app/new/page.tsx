"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NewTemplatePage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleGenerate() {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/generate-template", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      if (!res.ok) throw new Error("Failed to generate");
      const { html } = await res.json();
      const created = await fetch("/api/templates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: prompt.slice(0, 64), html }),
      }).then((r) => r.json());
      router.push(`/builder/${created.id}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-semibold">AI-assisted template</h1>
      <Input placeholder="Describe the email you want" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      <div className="flex gap-2">
        <Button onClick={handleGenerate} disabled={loading}>{loading ? "Generating..." : "Generate with Claude"}</Button>
      </div>
    </div>
  );
}