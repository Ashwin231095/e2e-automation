import { browser, ElementFinder, ExpectedConditions } from "protractor";

export class WebdriverHelper {
    constructor() {
    }

    public static async click(element: ElementFinder) {
        return await element.click();
    }

    public static async delayClickBy(element: ElementFinder, milliseconds: number) {
        await browser.sleep(milliseconds);
        return await element.click();
    }

    public static async sleep(milliseconds: number){
        await browser.sleep(milliseconds);
    }

    public static async waitForVisibility(element: ElementFinder, millies: number = 30000) {
        return await browser.wait(ExpectedConditions.visibilityOf(element), millies);
    }

    public static async waitForPresence(element: ElementFinder, millies: number = 30000) {
        return await browser.wait(ExpectedConditions.presenceOf(element), millies)
    }

    public static async waitForInvisibility(element: ElementFinder, millies: number = 30000) {
        return await browser.wait(ExpectedConditions.invisibilityOf(element), millies)
    }

    public static async waitForStaleness(element: ElementFinder, millies: number = 30000) {
        return await browser.wait(ExpectedConditions.stalenessOf(element), millies)
    }

    public static async waitForClickable(element: ElementFinder, millies: number = 30000) {
        return await browser.wait(ExpectedConditions.elementToBeClickable(element), millies)
    }

    public static async waitForTextToPresentInElement(element: ElementFinder, text: string, millies: number = 30000) {
        return await browser.wait(ExpectedConditions.textToBePresentInElement(element, text), millies)
    }

    public static async waitForTextToPresentInElementValue(element: ElementFinder, text: string, millies: number = 30000) {
        return await browser.wait(ExpectedConditions.textToBePresentInElementValue(element, text), millies)
    }

    public static async waitForelementToBeSelected(element: ElementFinder, millies: number = 30000) {
        return await browser.wait(ExpectedConditions.elementToBeSelected(element), millies)
    }
}
