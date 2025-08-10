"use client";
import { useEffect, useRef, useState } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import presetNewsletter from "grapesjs-preset-newsletter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { extractVariablesFromHtml, substituteVariables, type VariableSchema } from "@/lib/variables";

export function EmailBuilder({ templateId }: { templateId: string }) {
  const editorRef = useRef<grapesjs.Editor | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [saving, setSaving] = useState(false);
  const [variableSchema, setVariableSchema] = useState<VariableSchema[]>([]);
  const [sampleData, setSampleData] = useState<Record<string, string>>({});
  const [previewHtml, setPreviewHtml] = useState<string>("");

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
        setVariableSchema((data.variableSchema as VariableSchema[] | null) ?? []);
        setSampleData((data.sampleData as Record<string, string> | null) ?? {});
        setPreviewHtml(String(data.html ?? ""));
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
        body: JSON.stringify({ html, designJson, variableSchema, sampleData }),
      });
    } finally {
      setSaving(false);
    }
  }

  function refreshVariablesFromEditor() {
    if (!editorRef.current) return;
    const html = editorRef.current.getHtml();
    const vars = extractVariablesFromHtml(html);
    // If schema empty, seed with defaults; otherwise, add any missing variables
    setVariableSchema((prev) => {
      const names = new Set(prev.map((v) => v.name));
      const merged = [...prev];
      for (const v of vars) {
        if (!names.has(v)) merged.push({ name: v, label: v, type: 'string' });
      }
      return merged;
    });
  }

  function updatePreview() {
    if (!editorRef.current) return;
    const html = editorRef.current.getHtml();
    const out = substituteVariables(html, sampleData || {});
    setPreviewHtml(out);
  }

  function handleSampleDataChange(name: string, value: string) {
    setSampleData((prev) => ({ ...prev, [name]: value }));
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
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Button onClick={handleSave} disabled={saving}>{saving ? "Saving..." : "Save"}</Button>
        <Button variant="outline" onClick={handleExportHtml}>Export HTML</Button>
        <Button variant="outline" onClick={refreshVariablesFromEditor}>Scan variables</Button>
        <Button variant="outline" onClick={updatePreview}>Update preview</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="text-sm font-medium">Variables</div>
          <div className="space-y-2">
            {variableSchema.length === 0 && (
              <div className="text-xs text-neutral-500">No variables detected. Click &quot;Scan variables&quot; to extract from the HTML.</div>
            )}
            {variableSchema.map((v) => (
              <div key={v.name} className="grid grid-cols-3 gap-2 items-center">
                <label className="text-sm text-neutral-600">{v.label ?? v.name}</label>
                <Input
                  className="col-span-2"
                  placeholder={v.placeholder ?? v.label ?? v.name}
                  value={sampleData?.[v.name] ?? ''}
                  onChange={(e) => handleSampleDataChange(v.name, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium">Live preview with sample data</div>
          <div className="border rounded">
            <iframe className="w-full min-h-[60vh]" srcDoc={previewHtml} />
          </div>
        </div>
      </div>

      <div>
        <div className="text-sm font-medium mb-2">Editor</div>
        <div ref={containerRef} />
      </div>
    </div>
  );
}