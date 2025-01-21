import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 60000,
  retries: 2,
  use: {
    headless: false,
    baseURL: 'https://paydo.com',
    viewport: { width: 1280, height: 720 },
    actionTimeout: 60000,
    navigationTimeout: 60000,

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    outputDir: 'test-results',
  },
  reporter: [
    ['html', { outputFolder: 'test-results', open: 'always' }],
    ['json', { outputFile: 'cucumber_report.json' }],
  ],
});
