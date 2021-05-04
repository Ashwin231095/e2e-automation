import { protractor, browser, element, by } from "protractor";

export class LoginPage{
    constructor(){

    }

    async login(username: string, password: string) {
    let EC = protractor.ExpectedConditions;
    const currentGuid = await browser.getWindowHandle();
    const allWindowGuid = await browser.getAllWindowHandles();
    const managerGuid = allWindowGuid.find(guid => guid !== currentGuid);
    await browser.switchTo().window(managerGuid);
    await browser.waitForAngularEnabled(false);
    await browser.wait(EC.visibilityOf(element(by.css('[id="Ecom_User_ID"]'))), 10000);
    const usernameField = element(by.css('[id="Ecom_User_ID"]'));
    await usernameField.sendKeys(username);
    await browser.sleep(1000);
    const passwordField = element(by.css('[id="Ecom_Password"]'));
    await passwordField.sendKeys(password);
    await browser.sleep(1000);
    const login = element(by.css('[id="loginButton2"]'));
    await login.click();
    await browser.wait(EC.visibilityOf(element(by.xpath('//div[text()="RN TEST FR R2 - d015225 - UserR1 TESTIDP"]//input'))), 10000);
    const testUser = element(by.xpath('//div[text()="RN TEST FR R2 - d015225 - UserR1 TESTIDP"]//input'));
    await testUser.click();
    await login.click();
    await browser.sleep(1000);
    await browser.switchTo().window(currentGuid);
    await browser.waitForAngularEnabled(true);
    // await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="OK"]//parent::button'))), 10000);
    // const okButton = element(by.xpath('//span[text()="OK"]//parent::button'));
    // await okButton.click();
    }
}