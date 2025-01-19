import { Given, When, Then } from '@cucumber/cucumber';
import HomePage from '../../../pages/homePage.js';
import AccountPage from '../../../pages/accountPage.js';

let homePage = new HomePage;
let accountPage = new AccountPage;

Given('User opens Paydo Home Page', async function () {
    homePage = new HomePage();
    await homePage.navigateTo();
});

Then('User clicks {string} Cookies on home pages', async function (buttonText) {
    homePage = new HomePage(); // Use the page instance from the context
    await homePage.clickButton(buttonText);
});

Then('User clicks {string} link button', async function (buttonText) {
    homePage = new HomePage(); // Use the page instance from the context
    await homePage.clickLinkButton(buttonText);
});

Then('User should see the {string} URL', async function (url) {
    homePage = new HomePage();
    await homePage.isUrlVisible("https://" + url);
});

Then('The page title should be {string}', async function (expectedTitle) {
    homePage = new HomePage(); // Pass the page instance
    await homePage.verifyTitle(expectedTitle); // Call the verifyTitle method
});

Then("Verify the h1 text {string}", async function (h1Text) {
    homePage = new HomePage();
    await homePage.isH1TextDisplayed(h1Text)
});

Then("Verify the {string} is displayed on Account Page", async function (spanName) {
    accountPage = new AccountPage();
    await accountPage.isSpanDisplayed(spanName)
});

Then("Verify the {string} fields are editable on Account Page", async function (placeholderText) {
    accountPage = new AccountPage();
    await accountPage.areFieldsWithPlaceholderEditable(placeholderText)
});

Then("Verify the Paydo logo is displayed", async function () {
    await homePage.isLogoDisplayed()
});

Then("User inserts {string} in email input field on Account page", async function (email) {
    accountPage = new AccountPage();
    await accountPage.enterEmail(email);
});

Then("User inserts {string} in password input field on Account page", async function (password) {
    accountPage = new AccountPage();
    await accountPage.enterPassword(password);
});

Then('User should see the error message {string}', async function (expectedMessage) {
    accountPage = new AccountPage(); 
    await accountPage.verifyErrorMessage(expectedMessage);
});

When('User clicks {string} button', async function (buttonText) {
    const homePage = new HomePage(this.page);
    await homePage.clickButtonByText(buttonText);
});
