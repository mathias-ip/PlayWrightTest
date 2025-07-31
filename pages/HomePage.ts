import { Page } from '@playwright/test';

export default class HomePage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async headingText() {
    return this.page.textContent('h1');
  }

  async clickMoreInformation() {
    await this.page.click('text=More information');
  }
}
