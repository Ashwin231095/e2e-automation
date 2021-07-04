import * as chai from 'chai';
import * as chaiaspromised from 'chai-as-promised';
import { WebdriverHelper } from '../utils/webdriver.utils';

import { protractor, browser, element, by, ElementFinder } from "protractor";

chai.use(chaiaspromised);

export class LoginPage{
    loginModule: ElementFinder;
    applicationLogin: ElementFinder;
    usernameField: ElementFinder;
    passwordField: ElementFinder;
    loginButton: ElementFinder;
    testUser: ElementFinder;
    errorMessage: ElementFinder;
    r1UserPreProd: ElementFinder;
    EC = protractor.ExpectedConditions;
    constructor(){
        this.loginModule = element(by.css('[class*="login-block"] [class*="Search-Button-Block"]'));
        this.applicationLogin = element(by.xpath('//button[not(contains(@style,"display: none;"))]'));
        this.usernameField = element(by.css('[id="Ecom_User_ID"]'));
        this.passwordField = element(by.css('[id="Ecom_Password"]'));
        this.loginButton = element(by.css('[id="loginButton2"]'));
        this.testUser = element(by.xpath('//div[text()="RN TEST FR R2 - d015225 - UserR1 TESTIDP"]//input'));
        this.errorMessage = element(by.xpath(`//div[text()='Login failed, please try again.']`));
        this.r1UserPreProd = element(by.xpath('//div[text()="R1 Bordeaux-Formation Fr"]'));
    }

    async login(username: string, password: string) {
    const currentGuid = await browser.getWindowHandle();
    const allWindowGuid = await browser.getAllWindowHandles();
    const managerGuid = allWindowGuid.find(guid => guid !== currentGuid);
    await browser.switchTo().window(managerGuid);
    await browser.waitForAngularEnabled(false);
    await browser.refresh();
    await browser.sleep(1000);
    await browser.wait(this.EC.visibilityOf(this.usernameField), 10000);
    await this.usernameField.sendKeys(username);
    await browser.sleep(1000);
    await this.passwordField.sendKeys(password);
    await browser.sleep(1000);
    await this.loginButton.click();
    await browser.wait(this.EC.visibilityOf(this.testUser), 10000);
    await this.testUser.click();
    await this.loginButton.click();
    await browser.sleep(2000);
    await browser.switchTo().window(currentGuid);
    await browser.waitForAngularEnabled(true);
    }

    async loginToPreProd (username: string, password: string) {
    const currentGuid = await browser.getWindowHandle();
    const allWindowGuid = await browser.getAllWindowHandles();
    const managerGuid = allWindowGuid.find(guid => guid !== currentGuid);
    await browser.switchTo().window(managerGuid);
    await browser.waitForAngularEnabled(false);
    await browser.wait(this.EC.visibilityOf(this.usernameField), 10000);
    await this.usernameField.sendKeys(username);
    await browser.sleep(1000);
    await this.passwordField.sendKeys(password);
    await browser.sleep(1000);
    await this.loginButton.click();
    await browser.sleep(2000);
    await browser.switchTo().window(currentGuid);
    await browser.waitForAngularEnabled(true);
    await WebdriverHelper.waitForVisibility(this.r1UserPreProd);
    await WebdriverHelper.click(this.r1UserPreProd);
    }

    async loginWithWrongCredentials(username: string, password: string) {
    const currentGuid = await browser.getWindowHandle();
    const allWindowGuid = await browser.getAllWindowHandles();
    const managerGuid = allWindowGuid.find(guid => guid !== currentGuid);
    await browser.switchTo().window(managerGuid);
    await browser.waitForAngularEnabled(false);
    await browser.wait(this.EC.visibilityOf(this.usernameField), 10000);
    await this.usernameField.sendKeys(username);
    await this.passwordField.sendKeys(password);
    await this.loginButton.click();
    await browser.wait(this.EC.visibilityOf(this.errorMessage), 10000);
    await chai.expect(this.errorMessage.isPresent()).to.eventually.be.true;
    await browser.driver.close();
    await browser.switchTo().window(currentGuid);
    await browser.sleep(2000);
    }
}