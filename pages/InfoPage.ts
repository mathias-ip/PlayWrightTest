import { Page } from '@playwright/test';

export default class InfoPage {
  constructor(private readonly page: Page) {}

  async headingText() {
    return this.page.textContent('h1');
  }
}
