import * as chai from 'chai';
import * as chaiaspromised from 'chai-as-promised';
import { When, Then } from 'cucumber';
import { BrowserUtils } from '../utils/browser.utils';
import { protractor, element, by, browser, ElementFinder, $$ } from 'protractor';

chai.use(chaiaspromised);

When('the user searches for vehicle with Immatriculation number as {string}', {timeout: 20 * 5000} , async (number: string) => {
    let EC = protractor.ExpectedConditions;
    const immatNameField = element(by.css('[id="immatName"]'));
    await immatNameField.clear();
    await immatNameField.sendKeys(number);
    await browser.sleep(1000);
    await browser.wait(EC.visibilityOf(element(by.xpath(`//div[contains(@class,"active")]//button[not(contains(@disabled,'disabled'))]`))), 10000);
    const researchButton = element(by.xpath(`//div[contains(@class,"active")]//button[not(contains(@disabled,'disabled'))]`));
    await researchButton.click();
});

When('the user searches for vehicle with vin number as {string}', {timeout: 20 * 5000} , async (number: string) => {
    let EC = protractor.ExpectedConditions;
    const vinField = element(by.css('[id="vinNumber"]'));
    await vinField.clear();
    await vinField.sendKeys(number);
    await browser.sleep(1000);
    await browser.wait(EC.visibilityOf(element(by.xpath(`//div[contains(@class,"active")]//button[not(contains(@disabled,'disabled'))]`))), 10000);
    const researchButton = element(by.xpath(`//div[contains(@class,"active")]//button[not(contains(@disabled,'disabled'))]`));
    await researchButton.click();
});

When('the user views the result page selecting a brand {string}', {timeout: 20 * 5000}, async (brandName: string) => {
    const airFilter = element(by.xpath(`//label[text()="${brandName}"]`));
    await airFilter.click();
    const validateSelection = element(by.xpath(`//div[@class="Validate-Button"]//button[not(contains(@class,'display-none'))]`));
    await validateSelection.click();
});

When('the user clicks on AJOUTER AU PANIER button for {string}', {timeout: 20 * 5000}, async (product: string) => {
    await browser.refresh();
    await browser.sleep(1000);
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(element(by.xpath(`//a[text()="${product}"]//ancestor::div[@class="parts-item-box"]//button[@class="contact-info-button"]`))));
    const ajouterAuPanier = element(by.xpath(`//a[text()="${product}"]//ancestor::div[@class="parts-item-box"]//button[@class="contact-info-button"]`));
    await ajouterAuPanier.click();
});

When('the user clicks on AJOUTER AU PANIER button with multiple quantity of products', {timeout: 20 * 5000}, async () => {
    await browser.refresh();
    await browser.sleep(2000);
    const acceptCookie = element(by.xpath('//div[@ng-click="vm.acceptCookiePolicy()"]'));
    await acceptCookie.click();
    const increaseButton = element(by.xpath(`//button[@ng-click="updateQuantity('+');"]//parent::span`));
    await increaseButton.click();
    const ajouterAuPanier = element(by.css('[class="contact-info-button"]'));
    await ajouterAuPanier.click();
});

When('the user clicks on cart icon', {timeout: 20 * 5000}, async () => {
    const cartIcon = element(by.xpath('//div[contains(@class,"total-basket-shortcut")]/span'));
    await cartIcon.click();
});

When('the user removes products from the cart', {timeout: 20 * 5000}, async () => {
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(element(by.xpath('//img[@src="medias/images/commons/delete-icon-disable.svg"]'))), 10000);
    const deleteButton = element(by.xpath('//img[@src="medias/images/commons/delete-icon-disable.svg"]'));
    await deleteButton.click();
});

When('the user empties the cart', {timeout: 20 * 5000}, async () => {
    await browser.sleep(1000);
    let EC = protractor.ExpectedConditions;
    const cartIcon = element(by.xpath('//div[contains(@class,"total-basket-shortcut")]/span'));
    await cartIcon.click();
    await browser.wait(EC.visibilityOf(element(by.xpath('//img[@src="medias/images/commons/delete-icon-disable.svg"]'))), 10000);
    const deleteButtons = element.all(by.xpath('//img[@src="medias/images/commons/delete-icon-disable.svg"]'));
    deleteButtons.map(async (button: ElementFinder) => await button.click());
});

When('the user navigates to the home page', {timeout: 20 * 5000}, async () => {
    await browser.navigate().to(browser.baseUrl);
});

When('the user clicks on the refrence {string}', {timeout: 20 * 5000}, async (refrence: string) => {
    const refrenceName = element(by.xpath(`//a[text()="${refrence}"]`));
    await refrenceName.click();
});

When('the user click on Voir mon panier button', {timeout: 20 * 5000}, async () => {
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="Voir mon panier"]'))), 10000);
    const voirMonPanierButton = element(by.xpath('//span[text()="Voir mon panier"]'));
    await voirMonPanierButton.click();
});

When('the user click on remove button in cart page', {timeout: 20 * 5000}, async () => {
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="Supprimer"]'))), 10000);
    const removeButton = element(by.xpath('//span[text()="Supprimer"]'));
    await removeButton.click();
    await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="confirmer"]'))), 10000);
    const confirmButton = element(by.xpath('//span[text()="confirmer"]'));
    await confirmButton.click();
});

When('the user clicks on validate my order button basket preview', {timeout: 20 * 5000}, async () => {
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="valider mon panier"]'))), 10000);
    const validerMonPanierButton = element(by.xpath('//span[text()="valider mon panier"]'));
    await validerMonPanierButton.click();
});

When('the user clicks on Valider ma commande button', {timeout: 20 * 5000}, async () => {
    await browser.sleep(1000);
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="Valider ma commande"]'))), 10000);
    const validerMaCommandeButton = element(by.xpath('//span[text()="Valider ma commande"]'));
    await validerMaCommandeButton.click();
});

When('the user clicks on my orders button in order details page', {timeout: 20 * 5000}, async () => {
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(element(by.xpath('//button[contains(@class,"myOrderButton")]'))), 10000);
    const validerMaCommandeButton = element(by.xpath('//button[contains(@class,"myOrderButton")]'));
    await validerMaCommandeButton.click();
});

When('the user clicks on order details button', {timeout: 20 * 5000}, async () => {
    let EC = protractor.ExpectedConditions;
    await browser.sleep(100000);
    const detailsButton = $$('[class*="detail-button-text"]').first();
    await detailsButton.click();
});

When('the user clicks on retour button', {timeout: 20 * 5000}, async () => {
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="Retour"]'))), 10000);
    const retour = element(by.xpath('//span[text()="Retour"]'));
    await retour.click();
});

When('the user clicks on logo', async () => {
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(element(by.xpath('//a[@ui-sref="home"]'))), 10000);
    const logo = element(by.xpath('//a[@ui-sref="home"]'));
    await logo.click();
});

When('the user clicks on logout button', {timeout: 20 * 5000}, async () => {
    let EC = protractor.ExpectedConditions;
    const profileDropdown = element(by.xpath('//div//a[contains(@class,"dropdown-toggle")]'));
    await profileDropdown.click();
    await browser.wait(EC.visibilityOf(element(by.xpath('//li[@ng-click="logout()"]//a'))), 10000);
    const logoutButton = element(by.xpath('//li[@ng-click="logout()"]//a'));
    await logoutButton.click();
});

When('the user clicks on vin tab in home page', async () => {
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(element(by.xpath(`//li[@select="vm.resetFieldFunc('vin')"]//a`))), 10000);
    const vimTab = element(by.xpath(`//li[@select="vm.resetFieldFunc('vin')"]//a`));
    await vimTab.click();
});

Then('the Immatriculation error should appear', {timeout: 20 * 5000}, async () => {
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(element(by.xpath('//span[@class="Aucun-vhicule-ident ng-binding"]'))), 10000);
    const immatriculationError = element(by.xpath('//span[@class="Aucun-vhicule-ident ng-binding"]'));
    await chai.expect(immatriculationError.isDisplayed()).to.eventually.be.true;
});

Then('the car parts with Immatriculation number as {string} should appear', {timeout: 20 * 5000}, async function (number: string) {
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(element(by.xpath(`//span[text()="${number}"]`))), 20000);
    const immatriculationNumber = element(by.xpath(`//span[text()="${number}"]`));
    await chai.expect(immatriculationNumber.isDisplayed()).to.eventually.be.true;
});

Then('the car parts with vin number as {string} should appear', {timeout: 20 * 5000}, async function (number: string) {
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(element(by.xpath(`//span[text()="${number}"]`))), 20000);
    const vinNumber = element(by.xpath(`//span[text()="${number}"]`));
    await chai.expect(vinNumber.isDisplayed()).to.eventually.be.true;
});

Then('the vehical parts result page is displayed', {timeout: 20 * 5000}, async () => {
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.presenceOf(element(by.xpath('//div[@id="pr"]//span[text()="Pièces de rechange"]'))), 10000);
    const resultPage = element(by.xpath('//div[@id="pr"]//span[text()="Pièces de rechange"]'));
    await chai.expect(resultPage.isPresent()).to.eventually.be.true;
  });

Then('the vehical parts result page is displayed here', {timeout: 20 * 5000}, async () => {
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.presenceOf(element(by.xpath('//div[@id="pr"]//span[text()="Pièces de rechange"]'))), 10000);
    const resultPage = element(by.xpath('//div[@id="pr"]//span[text()="Pièces de rechange"]'));
    await chai.expect(resultPage.isPresent()).to.eventually.be.true;
  });

Then('an empty cart is displayed', {timeout: 20 * 5000}, async () => {
    await browser.sleep(1000);
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(element(by.xpath('//span[contains(@class,"empty-text empty-caption")]'))), 10000);
    const resultPage = element(by.xpath('//span[contains(@class,"empty-text empty-caption")]'));
    await chai.expect(resultPage.isDisplayed()).to.eventually.be.true;
    const closeCart = element(by.xpath('//div[@class="cartButtonLayout"]//img'));
    await closeCart.click();
  });

Then('the navigated page is {string}', {timeout: 20 * 5000}, async (url: string) => {
    await chai.expect(BrowserUtils.getCurrentURL()).to.eventually.contain(url);
});

Then('the cart count should be {string}' , {timeout: 20 * 5000}, async (cartCount: string) => {
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(element(by.xpath('//div[contains(@class,"cart-count")]//span'))), 10000);
    const getCount: string = await element(by.xpath('//div[contains(@class,"cart-count")]//span')).getText();
    chai.expect(getCount).to.be.equal(cartCount);
});

Then('the basket preview is open' , {timeout: 20 * 5000}, async () => {
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(element(by.xpath('//basket-preview'))), 10000);
    const basketPreview = element(by.xpath("//basket-preview"));
    await chai.expect(basketPreview.isDisplayed()).to.eventually.be.true;
});

Then('the cart page is empty' , {timeout: 20 * 5000}, async () => {
    await browser.sleep(1000);
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(element(by.xpath('//div[contains(@class,"empty-text-heading")]'))), 10000);
    const resultPage = element(by.xpath('//div[contains(@class,"empty-text-heading")]'));
    await chai.expect(resultPage.isDisplayed()).to.eventually.be.true;
});

Then('the cart count should be 0' , {timeout: 20 * 5000}, async () => {
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(element(by.xpath('//img[@ng-if="articleCount == 0"]'))), 10000);
    const getCount = element(by.xpath('//img[@ng-if="articleCount == 0"]'));
    await chai.expect(getCount.isDisplayed()).to.eventually.be.true;
});

Then('the order confirmation page is displayed' , {timeout: 20 * 5000}, async () => {
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(element(by.xpath('//div[@ng-if="vm.isDetailedConfirmation"]'))), 10000);
    const orderDetails = element(by.xpath('//div[@ng-if="vm.isDetailedConfirmation"]'));
    await chai.expect(orderDetails.isDisplayed()).to.eventually.be.true;
});

Then('the order details page is displayed', {timeout: 20 * 5000}, async () => {
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(element(by.xpath('//div[contains(@class," order-confirm-block")]'))), 10000);
    const orderDetails = element(by.xpath('//div[contains(@class," order-confirm-block")]'));
    await chai.expect(orderDetails.isDisplayed()).to.eventually.be.true;
});

Then('the vim nnumber field is displayed', async () => {
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(element(by.xpath('//input[@id="vinNumber"]'))), 10000);
    const vinField = element(by.xpath('//input[@id="vinNumber"]'));
    await chai.expect(vinField.isDisplayed()).to.eventually.be.true;
});
