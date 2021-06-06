import { WebdriverHelper } from "../utils/webdriver.utils";
import { browser, by, element, ElementFinder, protractor } from "protractor";

export class Common {
    EC = protractor.ExpectedConditions;
    logo: ElementFinder;
    retour: ElementFinder;
    profileDropdown: ElementFinder;
    logoutButton: ElementFinder;
    constructor() {
        this.logo = element(by.xpath('//a[@ui-sref="home"]'));
        this.retour = element(by.xpath('//span[text()="Retour"]'));
        this.profileDropdown = element(by.xpath('//div//a[contains(@class,"dropdown-toggle")]'));
        this.logoutButton = element(by.xpath('//li[@ng-click="logout()"]//a'));

    }

    async navigateHome() {
        await browser.refresh();
        await browser.wait(this.EC.visibilityOf(this.logo), 10000);
        await WebdriverHelper.click(this.logo);
    }

    async clickRetour() {
        await browser.wait(this.EC.visibilityOf(this.retour), 10000);
        await this.retour.click();
    }

    async clickLogoutButton() {
        await this.profileDropdown.click();
        await browser.wait(this.EC.visibilityOf(this.logoutButton), 10000);
        await this.logoutButton.click();
    }

}
