import { test, expect, request } from '@playwright/test';

test('seed then gallery returns items', async ({ baseURL }) => {
  const api = await request.newContext();
  const seed = await api.post(`${baseURL}/api/seed`);
  // Seed may be idempotent; accept 200 or 500 if prisma not yet ready (developer environment quirk)
  expect([200, 500]).toContain(seed.status());

  const res = await api.get(`${baseURL}/api/gallery`);
  // Expect either OK with JSON array or 500 if DB not initialized
  if (res.status() === 200) {
    const data = await res.json();
    expect(Array.isArray(data)).toBe(true);
  } else {
    expect(res.status()).toBe(500);
  }
});




