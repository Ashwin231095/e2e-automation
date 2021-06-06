import * as chai from 'chai';
import * as chaiaspromised from 'chai-as-promised';
import { browser } from 'protractor';
import { Given, When, Then } from 'cucumber';
import { protractor } from 'protractor/built/ptor';

import { PageObjects } from '../page-objects/pages';
import { BrowserUtils } from '../utils/browser.utils';

chai.use(chaiaspromised);

let page: PageObjects;
page = new PageObjects();

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

When('the user clicks on the login button', {timeout: 20 * 5000}, async () => {
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(page.loginPage.applicationLogin), 10000);
    await page.loginPage.applicationLogin.click();
});

When('user logins in with credentials id {string} and password {string}', {timeout: 20 * 5000}, async (username, password) => {
    await page.loginPage.login(username, password);
    await browser.sleep(1000);
    await browser.refresh();
});

When('the user invalid R2 username and password as {string} and {string}', {timeout: 20 * 5000}, async (username, password) => {
    await page.loginPage.loginWithWrongCredentials(username, password);
});

Then('there is the login module displayed', {timeout: 20 * 5000}, async () => {
    await chai.expect(page.loginPage.loginModule.isPresent()).to.eventually.be.true;
});

Then('the page is displayed with url {string}', async (url: string) => {
    await chai.expect(BrowserUtils.getCurrentURL()).to.eventually.contain(url);
});

