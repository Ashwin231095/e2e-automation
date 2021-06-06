import * as chai from 'chai';
import * as chaiaspromised from 'chai-as-promised';
import { WebdriverHelper } from 'e2e/utils/webdriver.utils';

chai.use(chaiaspromised);

import { browser, by, element, ElementArrayFinder, ElementFinder, protractor } from "protractor";

export class CartPage extends WebdriverHelper {
    EC = protractor.ExpectedConditions;
    cartIcon: ElementFinder;
    deleteButton: ElementFinder;
    deleteButtons: ElementArrayFinder;
    resultPage: ElementFinder;
    voirMonPanierButton: ElementFinder;
    validerMonPanierButton: ElementFinder;
    cartCount: ElementFinder;
    basketPreview: ElementFinder;
    resultEmptyPage: ElementFinder;
    getZeroCount: ElementFinder;
    removeButton: ElementFinder;
    confirmButton: ElementFinder;
    closeCart: ElementFinder;

    constructor() {
        super();
        this.cartIcon = element(by.xpath('//div[contains(@class,"total-basket-shortcut")]/span'));
        this.deleteButton = element(by.xpath('//img[@src="medias/images/commons/delete-icon-disable.svg"]'));
        this.deleteButtons = element.all(by.xpath('//img[@src="medias/images/commons/delete-icon-disable.svg"]'));
        this.resultPage = element(by.xpath('//span[contains(@class,"empty-text empty-caption")]'));
        this.voirMonPanierButton = element(by.xpath('//span[text()="Voir mon panier"]'));
        this.validerMonPanierButton = element(by.xpath('//span[text()="valider mon panier"]'));
        this.cartCount = element(by.xpath('//div[contains(@class,"cart-count")]//span'));
        this.basketPreview = element(by.xpath('//basket-preview'));
        this.resultEmptyPage = element(by.xpath('//div[contains(@class,"empty-text-heading")]'));
        this.getZeroCount = element(by.xpath('//img[@ng-if="articleCount == 0"]'));
        this.removeButton = element(by.xpath('//span[text()="Supprimer"]'));
        this.confirmButton = element(by.xpath('//span[text()="confirmer"]'));
        this.closeCart = element(by.xpath('//div[@class="cartButtonLayout"]//img'));
    }

    async clickCartIcon() {
        await WebdriverHelper.click(this.cartIcon);
    }

    async removeItems() {
        await WebdriverHelper.waitForVisibility(this.deleteButton)
        await WebdriverHelper.click(this.deleteButton);
    }

    async emptyTheCart() {
        await WebdriverHelper.sleep(1000);
        await WebdriverHelper.click(this.cartIcon);
        await WebdriverHelper.waitForVisibility(this.deleteButton, 10000);
        this.deleteButtons.map(async (button: ElementFinder) => await WebdriverHelper.click(button));
    }

    async emptyCartDisplay() {
        await WebdriverHelper.sleep(1000);
        await WebdriverHelper.waitForVisibility(this.resultPage, 10000);
        await chai.expect(this.resultPage.isDisplayed()).to.eventually.be.true;
        await WebdriverHelper.click(this.closeCart);
    }

    async clickVoirMonPanier() {
        await WebdriverHelper.waitForVisibility(this.voirMonPanierButton, 10000);
        await WebdriverHelper.click(this.voirMonPanierButton);
    }

    async clickValiderMonPanier() {
        await WebdriverHelper.waitForVisibility(this.validerMonPanierButton, 10000);
        await WebdriverHelper.click(this.validerMonPanierButton);
    }

    async cartCountShouldBe(): Promise<string> {
        await WebdriverHelper.waitForVisibility(this.cartCount, 10000)
        const getCount: string = await this.cartCount.getText();
        return getCount;
    }

    async isBasketPreviewDisplay(): Promise<boolean> {
        await browser.wait(this.EC.visibilityOf(this.basketPreview), 10000);
        return await this.basketPreview.isDisplayed();
    }

    async emptyCartPageDisplay() {
        await browser.sleep(1000);
        let EC = protractor.ExpectedConditions;
        await browser.wait(EC.visibilityOf(this.resultEmptyPage), 10000);
        return await this.resultEmptyPage.isDisplayed();
    }

    async theCartCountIsZero(): Promise<boolean> {
        await browser.wait(this.EC.visibilityOf(this.getZeroCount), 10000);
        return await this.getZeroCount.isDisplayed();
    }

    async clickOnRemoveButton() {
        await browser.wait(this.EC.visibilityOf(this.removeButton), 10000);
        await this.removeButton.click();
        await browser.wait(this.EC.visibilityOf(this.confirmButton), 10000);
        await this.confirmButton.click();
    }
}
