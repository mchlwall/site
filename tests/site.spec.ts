import { test, expect } from '@playwright/test';

test('has page elements', async ({ page }) => {
  await page.goto('/site');

  await expect(page).toHaveTitle(/Michael Wall/);
  // await expect(page.getByRole('img', { name: 'Test and Deploy' })).toBeVisible();
  // await page.getByRole('link', { name: 'mailto:mchlwall@gmail.com' }).scrollIntoViewIfNeeded();
  // await page.getByTestId('email-link').scrollIntoViewIfNeeded();
  await page.getByTestId('email-link').click();
});