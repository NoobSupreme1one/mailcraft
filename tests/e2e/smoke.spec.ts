import { test, expect } from '@playwright/test';

test('homepage renders and has CTAs', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/FreeMail/i);
  await expect(page.getByRole('link', { name: /Browse gallery/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /Generate with AI/i })).toBeVisible();
});



