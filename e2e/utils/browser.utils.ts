import { browser, by, element } from "protractor";

export class BrowserUtils {
    constructor(){

    }
    
    static getCurrentURL = async () => {
        return browser.getCurrentUrl();
    }

    static clickCookieButton = async () => {
        const acceptCookie = element(by.xpath('//div[@ng-click="vm.acceptCookiePolicy()"]'));
        await acceptCookie.click();
    }

    static quitBrowser = async () => {
        return await browser.quit()
    }
}