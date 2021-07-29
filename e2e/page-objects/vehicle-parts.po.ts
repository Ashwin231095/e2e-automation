import { browser, by, element, ElementFinder, protractor } from "protractor";

export class VehiclePartsPage {
    EC = protractor.ExpectedConditions;
    airFilter: (brandName: string) => ElementFinder;
    validateSelection: ElementFinder;
    carParts: (carNumber: string) => ElementFinder;
    filtration: ElementFinder;

    constructor() {
        this.airFilter = (brandName: string) => element(by.xpath(`//label[text()="${brandName}"]`));
        this.validateSelection = element(by.xpath(`//div[@class="Validate-Button"]//button[not(contains(@class,'display-none'))]`));
        this.carParts = (carNumber: string) => element(by.xpath(`//span[text()="${carNumber}"]`));
        this.filtration = element(by.xpath(`//span[text()="Filtration"]`));
    }

    async confirmPartSelection(brandName: string) {
        await this.airFilter(brandName).click();
        await this.validateSelection.click();
    }

    async confirmPartSelectionInGrid(brandName: string) {
        await this.filtration.click();
        await browser.wait(this.EC.visibilityOf(this.airFilter(brandName)), 10000);
        await this.airFilter(brandName).click();
        await browser.sleep(1000);
        await this.validateSelection.click();
    }

    async carPartsDisplay(carNumber: string) {
        await browser.wait(this.EC.visibilityOf(this.carParts(carNumber)), 20000);
        return await this.carParts(carNumber).isDisplayed();
    }
}