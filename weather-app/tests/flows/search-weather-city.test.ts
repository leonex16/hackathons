import { test, expect } from '@playwright/test';
import type { Page, BrowserContext } from '@playwright/test';

test.describe('Search weather city', () => {
  const addCityToLayout = async (page: Page, city: string) => {
    await page.locator(`li:has-text("${city}")`).nth(0).click();
  };
  const searchCity = async (page: Page, city: string) => {
    await page.locator('button:has-text("search")').click();
    await page.locator('input[placeholder="Search city"]').click();
    await page.locator('input[placeholder="Search city"]').fill(city);
  };

  const getLocalStorageItem = async (context: BrowserContext, key: string) => {
    const { origins } = await context.storageState();
    const { localStorage } = origins[0];
    const item = localStorage.find((item) => item.name === key);

    return JSON.parse(item.value ?? '{}');
  };

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have at least one weather card to open page', async ({ page }) => {
    await expect(page.locator('.weather-card')).toBeVisible();
  });

  test('should display max 5 items to select', async ({ page }) => {
    await searchCity(page, 'String Prairie');
    await page.waitForSelector('ul.autocomplete__list > li');

    expect(await page.locator('ul.autocomplete__list > li').count()).toBeLessThanOrEqual(5);
  });

  test('should display the weather in Santiago', async ({ page }) => {
    await searchCity(page, 'String Prairie');
    await addCityToLayout(page, 'String Prairie');

    await expect(page.locator('text=String Prairie, USA United States of America')).toBeVisible();
  });

  test('should save into local storage the selected city', async ({ context, page }) => {
    await searchCity(page, 'String Prairie');
    await addCityToLayout(page, 'String Prairie');
    await page.waitForResponse((response) => response.url().includes('/api/weather-realtime'));

    const weatherData = await getLocalStorageItem(context, 'weather-data');
    const weather = weatherData.find((item) => item.location.name === 'String Prairie');

    expect(weatherData.length).toBe(2);
    expect(weather).toBeTruthy();
  });

  test('should have display some message when the search not found cities', async ({ page }) => {
    await searchCity(page, 'CITY_INVENTED');

    await expect(page.locator('text=We are sorry! We could not find any weather data')).toBeVisible(
      { timeout: 20000 }
    );
  });
});
