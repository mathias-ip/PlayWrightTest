import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';

test.describe('Home page', () => {
  test('should display correct heading', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await expect(await home.headingText()).toContain('Example Domain');
  });

  test('should navigate to info page', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await home.clickMoreInformation();
    await expect(page).toHaveURL(/iana.org/);
  });
});
