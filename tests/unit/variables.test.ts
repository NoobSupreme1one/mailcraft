import { describe, it, expect } from 'vitest';
import { extractVariablesFromHtml, substituteVariables } from '@/lib/variables';

describe('variables utils', () => {
  it('extracts variables from HTML', () => {
    const html = '<h1>Hello {{FirstName}} at {{ Company }}</h1>';
    expect(extractVariablesFromHtml(html)).toEqual(['Company', 'FirstName']);
  });

  it('substitutes variables safely', () => {
    const html = '<p>Hi {{Name}}, from {{Org}}</p>';
    const out = substituteVariables(html, { Name: 'Ada', Org: 'ACME' });
    expect(out).toContain('Hi Ada, from ACME');
  });
});


