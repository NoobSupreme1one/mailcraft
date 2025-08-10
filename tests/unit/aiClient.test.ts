import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { createChatClient } from '@/lib/aiClient';

const mockFetch = vi.fn();

describe('aiClient', () => {
  const realFetch = global.fetch;

  beforeEach(() => {
    vi.useFakeTimers();
    // @ts-expect-error override
    global.fetch = mockFetch;
    mockFetch.mockReset();
  });

  afterEach(() => {
    vi.useRealTimers();
    global.fetch = realFetch;
  });

  it('uses Gemini when it succeeds', async () => {
    mockFetch.mockResolvedValueOnce(new Response(JSON.stringify({
      candidates: [{ content: { parts: [{ text: '<html>ok</html>' }] } }],
    }), { status: 200 }));

    const client = createChatClient({ geminiApiKey: 'g', openrouterApiKey: 'o' });
    const result = await client.chat({
      messages: [{ role: 'user', content: 'hello' }],
      geminiModel: 'gemini-1.5-flash',
    });

    expect(result.provider).toBe('gemini');
  });

  it('falls back to OpenRouter on Gemini failure', async () => {
    // Gemini fails
    mockFetch.mockResolvedValueOnce(new Response('bad', { status: 500 }));
    // OpenRouter models list
    mockFetch.mockResolvedValueOnce(new Response(JSON.stringify({ data: [{ id: 'openai/gpt-4o-mini' }] }), { status: 200 }));
    // OpenRouter chat
    mockFetch.mockResolvedValueOnce(new Response(JSON.stringify({
      choices: [{ message: { content: '<html>ok</html>' } }]
    }), { status: 200 }));

    const client = createChatClient({ geminiApiKey: 'g', openrouterApiKey: 'o' });
    const result = await client.chat({ messages: [{ role: 'user', content: 'hello' }] });
    expect(result.provider).toBe('openrouter');
  });
});




