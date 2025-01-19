import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 60000,
  retries: 2, // Retries failed tests twice
  use: {
    headless: false, // Run tests in headful mode (browser visible)
    baseURL: 'https://paydo.com', // Set a base URL for all tests
    viewport: { width: 1280, height: 720 }, // Default viewport size
    actionTimeout: 60000,
    navigationTimeout: 60000,
  },
});
