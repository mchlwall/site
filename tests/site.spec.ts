import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://mchlwall.github.io/site/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Michael Wall/);
});
