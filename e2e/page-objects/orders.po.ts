import { $$, browser, by, element, ElementFinder, protractor } from "protractor";

export class OrdersPage {
    EC = protractor.ExpectedConditions;
    detailsButton: ElementFinder;
    orderDetails: ElementFinder;
    orderDetailsInfo: ElementFinder;

    constructor() {
        this.detailsButton = $$('[class*="detail-button-text"]').first();
        this.orderDetails = element(by.xpath('//div[@ng-if="vm.isDetailedConfirmation"]'));
        this.orderDetailsInfo = element(by.xpath('//div[contains(@class," order-confirm-block")]'));
    }

    async clickOrderDetails() {
        await this.detailsButton.click();
    }

    async orderConfirmationPageDisplay(): Promise<boolean> {
        await browser.wait(this.EC.visibilityOf(this.orderDetails), 15000);
        return await this.orderDetails.isDisplayed();
    }

    async orderDetailsDisplay() {
        await browser.wait(this.EC.visibilityOf(element(by.xpath('//div[contains(@class," order-confirm-block")]'))), 10000);
        return await this.orderDetailsInfo.isDisplayed();
    }
}
