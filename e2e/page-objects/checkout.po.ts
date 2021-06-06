import { WebdriverHelper } from "../utils/webdriver.utils";
import { browser, by, element, ElementFinder } from "protractor";

export class CheckoutPage extends WebdriverHelper {
    validerMaCommandeButton: ElementFinder;
    constructor() {
        super();
        this.validerMaCommandeButton = element(by.xpath('//span[text()="Valider ma commande"]'));
    }

    async clickValiderMaCommande() {
        await WebdriverHelper.sleep(1000)
        await WebdriverHelper.waitForVisibility(this.validerMaCommandeButton);
        await WebdriverHelper.click(this.validerMaCommandeButton);
    }
}
