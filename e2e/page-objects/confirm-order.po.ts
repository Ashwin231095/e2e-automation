import { browser, by, element, ElementFinder, protractor } from "protractor";

export class ConfirmOrderPage {
    EC = protractor.ExpectedConditions;
    validerMaCommandeButton: ElementFinder;
    constructor() {
        this.validerMaCommandeButton = element(by.xpath('//button[contains(@class,"myOrderButton")]'));
    }

    async clickMyOrders() {
        await browser.wait(this.EC.visibilityOf(this.validerMaCommandeButton), 10000);
        await this.validerMaCommandeButton.click();
    }
}
