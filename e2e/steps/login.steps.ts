import { browser, by, element } from 'protractor';
import { Given, When, Then } from 'cucumber';
import * as chai from 'chai';
import * as chaiaspromised from 'chai-as-promised';

import { BrowserUtils } from '../utils/browser.utils';

chai.use(chaiaspromised);

Given('the user has the application url', async () => {
    await chai.expect(BrowserUtils.getCurrentURL()).to.eventually.contain(browser.baseUrl);
});


When('the user navigates to the application', async () => {
    await chai.expect(BrowserUtils.getCurrentURL()).to.eventually.contain(browser.baseUrl);
});

Then('there is the login module displayed', async () => {
    const login = element(by.css('[class*="login-block"] [class*="Search-Button-Block"]'))
    await chai.expect(login.isPresent()).to.eventually.be.true;
});
