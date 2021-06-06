import { browser, by, element, ElementFinder, protractor } from "protractor";

export class HomePage {
    EC = protractor.ExpectedConditions;
    immatNameField: ElementFinder;
    researchButton: ElementFinder;
    vinTab: ElementFinder;
    vinField: ElementFinder;
    immatriculationError: ElementFinder;

    constructor() {
        this.immatNameField = element(by.css('[id="immatName"]'));
        this.researchButton = element(by.xpath(`//div[contains(@class,"active")]//button[not(contains(@disabled,'disabled'))]`));
        this.vinField = element(by.css('[id="vinNumber"]'));
        this.vinTab = element(by.xpath(`//li[@select="vm.resetFieldFunc('vin')"]//a`));
        this.immatriculationError = element(by.xpath('//span[@class="Aucun-vhicule-ident ng-binding"]'));
    }

    async searchImmatriculation(number: string) {
        await this.immatNameField.clear();
        await this.immatNameField.sendKeys(number);
        await browser.sleep(1000);
        await browser.wait(this.EC.visibilityOf(this.researchButton), 10000);
        await this.researchButton.click();
    }

    async clickVinTab() {
        await browser.wait(this.EC.visibilityOf(this.vinTab), 10000);
        await this.vinTab.click();
    }

    async searchVin(number: string) {
        await this.vinField.clear();
        await this.vinField.sendKeys(number);
        await browser.sleep(1000);
        await browser.wait(this.EC.visibilityOf(this.researchButton), 10000);
        await this.researchButton.click();
    }
    
    async isImmatFieldDisplayed(): Promise<boolean> {
        await browser.wait(this.EC.visibilityOf(this.immatNameField), 10000);
        return await this.immatNameField.isDisplayed();
    }

    async isImmatErrorDisplayed(): Promise<boolean> {
        await browser.wait(this.EC.visibilityOf(this.immatriculationError), 10000);
        return await this.immatriculationError.isDisplayed();
    }

    async vinNumberFieldDisplay(): Promise<boolean> {
        await browser.wait(this.EC.visibilityOf(this.vinField), 10000);
        return await this.vinField.isDisplayed();
    }
}
