import { searchModel } from "e2e/test-data/types";
import { browser, by, element, ElementFinder, protractor } from "protractor";
import { WebdriverHelper } from '../utils/webdriver.utils';

export class HomePage extends WebdriverHelper{
    EC = protractor.ExpectedConditions;
    immatNameField: ElementFinder;
    researchButton: ElementFinder;
    vinTab: ElementFinder;
    vinField: ElementFinder;
    immatriculationError: ElementFinder;
    modelTab: ElementFinder;
    dropDown: (option: string) => ElementFinder;
    selectOption: (option: string) => ElementFinder;
    thumbNaiImage: ElementFinder;

    constructor() {
        super();
        this.immatNameField = element(by.css('[id="immatName"]'));
        this.researchButton = element(by.xpath(`//div[contains(@class,"active")]//button[not(contains(@disabled,'disabled'))]`));
        this.vinField = element(by.css('[id="vinNumber"]'));
        this.vinTab = element(by.xpath(`//li[@select="vm.resetFieldFunc('vin')"]//a`));
        this.modelTab = element(by.xpath(`//li[@select="vm.resetFieldFunc('brand')"]//a`));
        this.immatriculationError = element(by.xpath('//span[@class="Aucun-vhicule-ident ng-binding"]'));
        this.thumbNaiImage = element(by.xpath('//div[@class="thumb-container"]//img[@ng-src="https://cdn-pre.asdh.aws.renault.com/plate_illustrations/thumbs/01059769.png"]'));
        this.dropDown = (label: string) => element(by.xpath(`//label[@for="${label}-text"]`));
        this.selectOption = (option: string) => element(by.xpath(`//div[text()="${option}"]`))
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

    async clickModelTab() {
        await browser.wait(this.EC.visibilityOf(this.modelTab), 10000);
        await this.modelTab.click();
    }

    async searchVin(number: string) {
        await this.vinField.clear();
        await this.vinField.sendKeys(number);
        await browser.sleep(1000);
        await browser.wait(this.EC.visibilityOf(this.researchButton), 10000);
        await this.researchButton.click();
    }

    async searchModel() {
        const options = ["RENAULT", "DUSTER 1 (X79)", "SUV 5-PORTES (H79)", "H5F", "TL4"];
        const labels = ["brandsGroups", "modelsGroups", "versionsGroups", "engineGroups", "gearboxGroups"]
        const selectionObj = options.map((option, index) => {
            return {
                label: labels[index],
                optionSelect: option
            }
        })
        for await(let obj of selectionObj) {
            await WebdriverHelper.waitForVisibility(this.dropDown(obj.label));
            await WebdriverHelper.waitForClickable(this.dropDown(obj.label));
            await WebdriverHelper.click(this.dropDown(obj.label));
            await WebdriverHelper.waitForVisibility(this.selectOption(obj.optionSelect));
            await WebdriverHelper.click(this.selectOption(obj.optionSelect));
        }
        await browser.sleep(1000);
        await browser.wait(this.EC.visibilityOf(this.researchButton), 10000);
        await this.researchButton.click();
    }

    async clickThumbNailImage() {
        await WebdriverHelper.waitForVisibility(this.thumbNaiImage);
        await WebdriverHelper.click(this.thumbNaiImage);
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
