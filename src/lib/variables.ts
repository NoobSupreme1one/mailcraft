export type VariableSchema = {
  name: string;
  label?: string;
  description?: string;
  type?: 'string' | 'number' | 'date' | 'url' | 'email';
  required?: boolean;
  placeholder?: string;
};

/** Extracts {{Variable}} tokens from an HTML string */
export function extractVariablesFromHtml(html: string): string[] {
  const re = /\{\{\s*([A-Za-z0-9_\-]+)\s*\}\}/g;
  const set = new Set<string>();
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    set.add(m[1]);
  }
  return Array.from(set).sort();
}

/** Safely substitutes variables into an HTML string */
export function substituteVariables(html: string, values: Record<string, unknown>): string {
  return html.replace(/\{\{\s*([A-Za-z0-9_\-]+)\s*\}\}/g, (_all, key: string) => {
    const v = values?.[key];
    if (v === null || v === undefined) return `{{${key}}}`;
    return String(v);
  });
}

/** Creates a default schema from variables found in HTML */
export function buildDefaultSchema(vars: string[]): VariableSchema[] {
  return vars.map((v) => ({ name: v, label: v, type: 'string' }));
}


