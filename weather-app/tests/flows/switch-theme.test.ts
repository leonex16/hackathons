import { test, expect } from '@playwright/test';
import type { Page, BrowserContext } from '@playwright/test';

test.describe('Switch between theme modes', () => {
  const toggleThemeMode = async (page: Page, clickCount = 1) => {
    await page.locator('button:has-text("settings")').click();
    await page.locator('text=Dark Background').click({ clickCount, delay: 100 });
  };

  const getLocalStorageItem = async (context: BrowserContext, key: string) => {
    const { origins } = await context.storageState();
    const { localStorage } = origins[0];
    const item = localStorage.find((item) => item.name === key);

    return JSON.parse(item.value ?? '{}');
  }

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have a dark theme by default', async ({ page }) => {
    await expect(page.locator('.dark-theme')).toBeVisible();
  });

  test('should switch to light theme', async ({ page }) => {
    await toggleThemeMode(page);

    await expect(page.locator('.light-theme')).toBeVisible();
  });

  test('should switch to dark theme', async ({ page }) => {
    await toggleThemeMode(page, 2);

    await expect(page.locator('.dark-theme')).toBeVisible();
  });

  test('should save the theme mode into local storage', async ({ context }) => {
    const settings = await getLocalStorageItem(context, 'settings');

    expect(settings).toHaveProperty('isDarkModeActive');
    expect(settings.isDarkModeActive).toBe(true);
  });
});
