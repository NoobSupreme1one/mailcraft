import { test, expect } from '@playwright/test';

test('unauthenticated AI flow redirects to sign-in', async ({ page }) => {
  await page.goto('/new');
  const button = page.getByRole('button', { name: /Sign in to generate/i });
  await expect(button).toBeVisible();
  await button.click();
  await expect(page).toHaveURL(/\/sign-in/);
});



