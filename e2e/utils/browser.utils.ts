import { browser } from "protractor";

export class BrowserUtils {
    constructor(){

    }
    static getCurrentURL = async () => {
        return browser.getCurrentUrl();
    }
}