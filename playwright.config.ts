import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: process.env.BASE_URL || 'https://example.com',
    browserName: process.env.BROWSER || 'chromium',
    headless: true,
  },
});
