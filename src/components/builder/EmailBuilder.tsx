"use client";
import { useEffect, useRef, useState } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import presetNewsletter from "grapesjs-preset-newsletter";
import { Button } from "@/components/ui/button";

export function EmailBuilder({ templateId }: { templateId: string }) {
  const editorRef = useRef<grapesjs.Editor | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const editor = grapesjs.init({
      container: containerRef.current,
      height: "80vh",
      fromElement: false,
      storageManager: false,
      plugins: [presetNewsletter],
    });
    editorRef.current = editor;

    (async () => {
      const res = await fetch(`/api/templates/${templateId}`);
      if (res.ok) {
        const data = await res.json();
        if (data.html) editor.setComponents(data.html);
      }
    })();

    return () => {
      editor.destroy();
      editorRef.current = null;
    };
  }, [templateId]);

  async function handleSave() {
    if (!editorRef.current) return;
    setSaving(true);
    try {
      const html = editorRef.current.getHtml();
      const designJson = JSON.stringify(editorRef.current.getComponents());
      await fetch(`/api/templates/${templateId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ html, designJson }),
      });
    } finally {
      setSaving(false);
    }
  }

  function handleExportHtml() {
    if (!editorRef.current) return;
    const html = editorRef.current.getHtml();
    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "template.html";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Button onClick={handleSave} disabled={saving}>{saving ? "Saving..." : "Save"}</Button>
        <Button variant="outline" onClick={handleExportHtml}>Export HTML</Button>
      </div>
      <div ref={containerRef} />
    </div>
  );
}