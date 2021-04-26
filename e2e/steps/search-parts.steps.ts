import * as chai from 'chai';
import * as chaiaspromised from 'chai-as-promised';
import { When, Then } from 'cucumber';
import { protractor, element, by, browser } from 'protractor';

chai.use(chaiaspromised);

When('the user searches for vehicle with Immatriculation number as {string}', {timeout: 20 * 5000} , async (number: string) => {
    let EC = protractor.ExpectedConditions;
    const immatNameField = element(by.css('[id="immatName"]'));
    await immatNameField.clear();
    await immatNameField.sendKeys(number);
    await browser.sleep(1000);
    await browser.wait(EC.visibilityOf(element(by.xpath(`//div[@class="tab-pane ng-scope active"]//button[not(contains(@disabled,'disabled'))]`))), 10000);
    const researchButton = element(by.xpath(`//div[@class="tab-pane ng-scope active"]//button[not(contains(@disabled,'disabled'))]`));
    await researchButton.click();
});

When('the user views the result page selecting a brand', {timeout: 20 * 5000}, async () => {
    const airFilter = element(by.xpath('//label[text()="Filtre à air"]'));
    await airFilter.click();
    const validateSelection = element(by.xpath(`//div[@class="Validate-Button"]//button[not(contains(@class,'display-none'))]`));
    await validateSelection.click();
});

When('the user clicks on AJOUTER AU PANIER button', {timeout: 20 * 5000}, async () => {
    await browser.sleep(1000);
    const ajouterAuPanier = element(by.css('[class="contact-info-button"]'));
    await ajouterAuPanier.click();
});

When('the user clicks on AJOUTER AU PANIER button with multiple quantity of products', {timeout: 20 * 5000}, async () => {
    let EC = protractor.ExpectedConditions;
    await browser.refresh();
    await browser.sleep(2000);
    const acceptCookie = element(by.xpath('//div[@ng-click="vm.acceptCookiePolicy()"]'));
    await acceptCookie.click();
    const increaseButton = element(by.xpath(`//button[@ng-click="updateQuantity('+');"]//parent::span`));
    await increaseButton.click();
    const ajouterAuPanier = element(by.css('[class="contact-info-button"]'));
    await ajouterAuPanier.click();
});

When('the user removes products from the cart', {timeout: 20 * 5000}, async () => {
    let EC = protractor.ExpectedConditions;
    const cartIcon = element(by.xpath('//div[contains(@class,"total-basket-shortcut")]/span'));
    await cartIcon.click();
    await browser.wait(EC.visibilityOf(element(by.xpath('//img[@src="medias/images/commons/delete-icon-disable.svg"]'))), 10000);
    const deleteButton = element(by.xpath('//img[@src="medias/images/commons/delete-icon-disable.svg"]'));
    await deleteButton.click();
});

Then('the Immatriculation error should appear', {timeout: 20 * 5000}, async () => {
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(element(by.xpath('//span[@class="Aucun-vhicule-ident ng-binding"]'))), 10000);
    const immatriculationError = element(by.xpath('//span[@class="Aucun-vhicule-ident ng-binding"]'));
    await chai.expect(immatriculationError.isDisplayed()).to.eventually.be.true;
});

Then('the car parts with Immatriculation number as {string} should appear', {timeout: 20 * 5000}, async function (number: string) {
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(element(by.xpath(`//span[text()="${number}"]`))), 10000);
    const immatriculationNumber = element(by.xpath(`//span[text()="${number}"]`));
    await chai.expect(immatriculationNumber.isDisplayed()).to.eventually.be.true;
  });

Then('the vehical parts result page is displayed', {timeout: 20 * 5000}, async () => {
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.presenceOf(element(by.xpath('//div[@id="pr"]//span[text()="Pièces de rechange"]'))), 10000);
    const resultPage = element(by.xpath('//div[@id="pr"]//span[text()="Pièces de rechange"]'));
    await chai.expect(resultPage.isPresent()).to.eventually.be.true;
  });

Then('an empty cart is displayed', {timeout: 20 * 5000}, async () => {
    await browser.sleep(1000);
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(element(by.xpath('//span[@class="empty-text empty-caption ng-binding"]'))), 10000);
    const resultPage = element(by.xpath('//span[@class="empty-text empty-caption ng-binding"]'));
    await chai.expect(resultPage.isDisplayed()).to.eventually.be.true;
  });
