import { browser, by, element, ElementFinder, protractor } from "protractor";

export class VehiclePartsInfoPage {
    EC = protractor.ExpectedConditions;
    addToCartButton: (product: string) => ElementFinder;
    refrenceName: (refrence: string) => ElementFinder;
    resultPage: ElementFinder;
    increaseButton: ElementFinder;
    ajouterAuPanier: ElementFinder;
    closeButton: ElementFinder;
    increaseQuantityButton: (quantity: string) => ElementFinder;
    ajouterAuPanierQuantity: (quantity: string) => ElementFinder;

    constructor() {
        this.addToCartButton = (product: string) => element(by.xpath(`//a[text()="${product}"]//ancestor::div[@class="parts-item-box"]//button[@class="contact-info-button"]`));
        this.refrenceName = (refrence: string) => element(by.xpath(`//a[text()="${refrence}"]`));
        this.resultPage = element(by.xpath('//div[@id="pr"]//span[text()="Pièces de rechange"]'));
        this.increaseButton = element(by.xpath(`//button[@ng-click="updateQuantity('+');"]//parent::span`));
        this.ajouterAuPanier = element(by.css('[class="contact-info-button"]'));
        this.closeButton = element(by.xpath('//a[@class="close"]'));
        this.increaseQuantityButton = (quantity: string) => element(by.xpath(`//a[text()="${quantity}"]//ancestor::div[@id="container"]//button[@ng-click="updateQuantity('+');"]`));
        this.ajouterAuPanierQuantity = (quantity: string) => element(by.xpath(`//a[text()="${quantity}"]//ancestor::div[@id="container"]//button[@class="contact-info-button"]`));
    }

    async addToCart(product: string) {
        await browser.wait(this.EC.visibilityOf(this.addToCartButton(product)));
        await this.addToCartButton(product).click();
    }

    async clickRefrence(refrence: string) {
        await this.refrenceName(refrence).click();
    }

    async partInfoPageDisplay(): Promise<boolean> {
        await browser.wait(this.EC.presenceOf(this.resultPage), 10000);
        return await this.resultPage.isPresent();
    }

    async addMultipleQuantity() {
        await browser.refresh();
        await browser.sleep(2000);
        await this.increaseButton.click();
        await this.ajouterAuPanier.click();
        await this.closeButton.click();
    }

    async addMultipleQuantityOf(quantity: string) {
        await browser.refresh();
        await browser.sleep(2000);
        await this.increaseQuantityButton(quantity).click();
        await this.ajouterAuPanierQuantity(quantity).click();
    }
}
