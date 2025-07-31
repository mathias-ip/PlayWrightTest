import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';
import InfoPage from '../pages/InfoPage';

test('info page should have IANA heading', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await home.clickMoreInformation();

  const info = new InfoPage(page);
  await expect(await info.headingText()).toContain('IANA-managed Reserved Domains');
});
