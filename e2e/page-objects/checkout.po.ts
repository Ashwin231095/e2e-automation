import { browser, by, element, ElementFinder, protractor } from "protractor";

export class CheckoutPage {
    EC = protractor.ExpectedConditions;
    validerMaCommandeButton: ElementFinder;
    constructor() {
        this.validerMaCommandeButton = element(by.xpath('//span[text()="Valider ma commande"]'));
    }

    async clickValiderMaCommande() {
        await browser.sleep(1000);
        await browser.wait(this.EC.visibilityOf(this.validerMaCommandeButton), 10000);
        await this.validerMaCommandeButton.click();
    }
}
