import { test, expect } from '@playwright/test';
import type { Page, BrowserContext } from '@playwright/test';

test.describe('Search weather city', () => {
  const searchAndAddSantiagoCity = async (page: Page) => {
    await page.locator('button:has-text("search")').click();
    await page.locator('input[placeholder="Search city"]').click();
    await page.locator('input[placeholder="Search city"]').fill('Santiago');
    await page.locator('li:has-text("Santiago Region Metropolitana, Chile")').nth(1).click();
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

  test('should have at least one weather card to open page', ({ page }) => {
    const card = page.locator('.weather-card');

    return expect(card).toBeVisible();
  });

  test('should display the weather in Santiago', async ({ page }) => {
    await searchAndAddSantiagoCity(page);

    await expect(page.locator('text="Ciudadsantiago, Chile"')).toBeVisible();
  });

  test('should save into local storage the selected city', async ({context, page}) => {
    await searchAndAddSantiagoCity(page);
    await page.waitForResponse(response => response.url().includes('/api/weather-realtime'));

    const weatherData = await getLocalStorageItem(context, 'weather-data');
    const weather = weatherData.find((item) => item.location.name === 'Ciudadsantiago');

    expect(weatherData.length).toBe(0);
    expect(weather).toBeTruthy();
  })
});
