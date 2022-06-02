import test, { expect } from '@playwright/test';

test.describe('Loader screen', () => {
  test('shoud display a loader while load app', async ({ page }) => {
    await page.goto('/');
  
    await expect(page.locator('[aria-label="Loading app..."]')).toBeVisible();
  });
  
  test('should hidden the loader when the app to be loaded', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('[aria-label="Loading app..."]')).toBeHidden({ timeout: 10000 });
  });
})
