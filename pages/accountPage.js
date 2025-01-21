import { expect } from '@playwright/test';

class AccountPage {

    constructor() {
        this.page = global.page;
    }

    async verifyTitle(expectedTitle) {
        console.log(`Verifying if the Title is ${expectedTitle}...`);
        const titleElements = await this.page.locator('head title', { timeout: 60000 }).allTextContents();
        const isTitleFound = titleElements.some((title) => title.includes(expectedTitle));
        expect(isTitleFound).toBe(true);
    }

    async isSpanDisplayed(spanName) {
        console.log(`Verifying ${spanName} span`);
        const isVisible = await this.page.locator(`//span[normalize-space(text())="${spanName}"]`).isVisible();
        expect(isVisible).toBe(true);
    }

    async areFieldsWithPlaceholderEditable(placeholderText) {
        console.log(`Verifying all fields with placeholder "${placeholderText}" are editable`);
        const inputFields = this.page.locator(`input[placeholder="${placeholderText}"]`);
        const count = await inputFields.count();
        for (let i = 0; i < count; i++) {
            const isEditable = await inputFields.nth(i).isEditable();
            expect(isEditable).toBe(true);
        }
    }

    async enterEmail(email) {
        console.log(`Enter ${email} email`);
        await this.page.fill('#mat-input-0', email);
    }

    async enterPassword(password) {
        console.log(`Enter ${password} password`);
        await this.page.fill('#mat-input-1', password);
    }

    async verifyErrorMessage(expectedMessage) {
        console.log(`Verifying error message: "${expectedMessage}"`);
        const actualMessage = await this.page.locator('ngp-info-block-content').textContent();
        expect(actualMessage.trim()).toBe(expectedMessage);
    }

}

export default AccountPage;

