# Playwright Test Example

This repository demonstrates a simple Playwright setup using the Page Object Model and environment variables.

## Getting Started

1. Install dependencies *(requires internet access)*:
   ```bash
   npm install
   ```

2. Copy the example environment file and adjust as needed:
   ```bash
   cp .env.example .env
   ```

3. Run the tests:
   ```bash
   npm test
   ```

Additional scripts are available:

- `npm run test:headed` – run tests with a visible browser.
- `npm run test:report` – open the HTML report from the last run.

## Project Structure

- `pages/` – Page Object classes used by the tests.
- `tests/` – Test files written with `@playwright/test`.
- `playwright.config.ts` – Shared configuration loaded from `.env`.

## Environment Variables

Environment variables are loaded from `.env`. See `.env.example` for available options.

