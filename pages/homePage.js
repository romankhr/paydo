import { expect } from '@playwright/test';
import config from '../playwright.config.js'; // Import config as an ES module

const { use: { baseURL } } = config;

class HomePage {

    constructor() {
        this.page = global.page;
    }

    async navigateTo() {
        console.log('Navigating to https://paydo.com...');
        await this.page.goto(baseURL, { timeout: 60000 });
        console.log('Navigation completed');
    }

    async clickButton(buttonText) {
        console.log(`Clicking the ${buttonText} button`);
        await this.page.click(`button:has-text("${buttonText}")`);
    }

    async clickLinkButton(buttonText) {
        console.log(`Clicking the ${buttonText} Link button`);
        await this.page.click(`a:has-text("${buttonText}")`);
    }

    async isUrlVisible(url) {
        console.log(`Verifying if the current URL is ${url}...`);
        const currentUrl = await this.page.url();
        expect(currentUrl).toContain(url);
    }

    async verifyTitle(expectedTitle) {
        console.log(`Verifying if the Title is ${expectedTitle}...`);
        await this.page.waitForTimeout(20000);
        const titleElements = await this.page.locator('head title', { timeout: 60000 }).allTextContents();
        const isTitleFound = titleElements.some((title) => title.includes(expectedTitle));
        expect(isTitleFound).toBe(true);
    }

    async isH1TextDisplayed(h1Text) {
        console.log(`Verifying h1 text ${h1Text} is displayed`);
        const isVisible = await this.page.locator(`h1:has-text("${h1Text}")`).isVisible();
        expect(isVisible).toBe(true);
    }

    async isLogoDisplayed() {
        console.log("Verifying if Paydo logo is displayed");
        const isVisible = await this.page.locator(`img[alt="Paydo logo"]`).isVisible();
        expect(isVisible).toBe(true);
    }

    async clickButtonByText(buttonText) {
        console.log(`Clicking the button with text: "${buttonText}"`);
        await this.page.locator(`button:has-text("${buttonText}")`).click();
    }

}

export default HomePage;

