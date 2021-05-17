import * as chai from 'chai';
import * as chaiaspromised from 'chai-as-promised';
import { browser, by, element, ElementFinder } from 'protractor';
import { Given, When, Then } from 'cucumber';

import { BrowserUtils } from '../utils/browser.utils';
import { protractor } from 'protractor/built/ptor';
import { LoginPage } from '../page-objects/login.po';

chai.use(chaiaspromised);

let loginPage: LoginPage;

Given('the user has the application url', async () => {
    await chai.expect(BrowserUtils.getCurrentURL()).to.eventually.contain(browser.baseUrl);
});

Given('that user navigates to page with url as {string}', async (url: string) => {
    await browser.navigate().to(url);
});

Given('that user is in page with url as {string}', async (url: string) => {
    await chai.expect(BrowserUtils.getCurrentURL()).to.eventually.contain(url);
});

When('the user navigates to the application', async () => {
    await chai.expect(BrowserUtils.getCurrentURL()).to.eventually.contain(browser.baseUrl);
});

When('the user clicks on the login button', async () => {
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(element(by.xpath('//button[not(contains(@style,"display: none;"))]'))), 10000);
    const loginButton: ElementFinder = element(by.xpath('//button[not(contains(@style,"display: none;"))]'));
    await loginButton.click();
});

When('user logins in with credentials id {string} and password {string}', {timeout: 20 * 5000}, async (username, password) => {
    loginPage = new LoginPage();
    await loginPage.login(username, password);
    await browser.sleep(1000);
    await browser.refresh();
});

When('the user invalid R2 username and password as {string} and {string}', {timeout: 20 * 5000}, async (username, password) => {
    let EC = protractor.ExpectedConditions;
    const currentGuid = await browser.getWindowHandle();
    const allWindowGuid = await browser.getAllWindowHandles();
    const managerGuid = allWindowGuid.find(guid => guid !== currentGuid);
    await browser.switchTo().window(managerGuid);
    await browser.waitForAngularEnabled(false);
    await browser.wait(EC.visibilityOf(element(by.css('[id="Ecom_User_ID"]'))), 10000);
    const usernameField = element(by.css('[id="Ecom_User_ID"]'));
    await usernameField.sendKeys(username);
    const passwordField = element(by.css('[id="Ecom_Password"]'));
    await passwordField.sendKeys(password);
    const login = element(by.css('[id="loginButton2"]'));
    await login.click();
    await browser.wait(EC.visibilityOf(element(by.xpath(`//div[text()='Login failed, please try again.']`))), 10000);
    const errorMessage = element(by.xpath(`//div[text()='Login failed, please try again.']`));
    await chai.expect(errorMessage.isPresent()).to.eventually.be.true;
    await browser.driver.close();
    await browser.switchTo().window(currentGuid);
    await browser.refresh();
});

Then('there is the login module displayed', async () => {
    const login = element(by.css('[class*="login-block"] [class*="Search-Button-Block"]'))
    await chai.expect(login.isPresent()).to.eventually.be.true;
});

Then('the page is displayed with url {string}', async (url: string) => {
    await chai.expect(BrowserUtils.getCurrentURL()).to.eventually.contain(url);
});

Then('the application should be logged in', async () => {
    let EC = protractor.ExpectedConditions;
    await chai.expect(BrowserUtils.getCurrentURL()).to.eventually.contain(browser.baseUrl);
    await browser.wait(EC.visibilityOf(element(by.css('[id="immatName"]'))), 10000);
    const immatNameField = element(by.css('[id="immatName"]'));
    await chai.expect(immatNameField.isDisplayed()).to.eventually.be.true;
});
