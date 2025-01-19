import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from 'playwright';

// Set default timeout globally for all steps
setDefaultTimeout(60000); // Timeout in milliseconds

let browser, context, page;

Before(async function () {
  // Launch the browser
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  global.page = await context.newPage(); // Set global.page
});

After(async function () {
  // Close the browser after each scenario
  if (browser) {
    await browser.close();
  }
});
