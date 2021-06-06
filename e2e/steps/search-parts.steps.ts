import * as chai from 'chai';
import * as chaiaspromised from 'chai-as-promised';
import { When, Then } from 'cucumber';
import { BrowserUtils } from '../utils/browser.utils';
import { protractor, element, by, browser, ElementFinder, $$ } from 'protractor';
import { PageObjects } from '../page-objects/pages';

chai.use(chaiaspromised);

let page: PageObjects;
page = new PageObjects();

When('the user searches for vehicle with Immatriculation number as {string}', {timeout: 20 * 5000} , async (number: string) => {
    await page.homePage.searchImmatriculation(number)
});

When('the user accepts the cookies', {timeout: 20 * 5000} , async () => {
    await BrowserUtils.clickCookieButton();
    
});

When('the user searches for vehicle with vin number as {string}', {timeout: 20 * 5000} , async (number: string) => {
    await page.homePage.searchVin(number);
});

When('the user views the result page selecting a brand {string}', {timeout: 20 * 5000}, async (brandName: string) => {
    await page.vehiclePartsPage.confirmPartSelection(brandName);
});

When('the user clicks on AJOUTER AU PANIER button for {string}', {timeout: 20 * 5000}, async (product: string) => {
    await page.partsInfo.addToCart(product);
});

When('the user clicks on AJOUTER AU PANIER button with multiple quantity of products', {timeout: 20 * 5000}, async () => {
    await page.partsInfo.addMultipleQuantity();
});

When('the user clicks on AJOUTER AU PANIER button with multiple quantity of products for {string}', {timeout: 20 * 5000}, async (refrence: string) => {
    await page.partsInfo.addMultipleQuantityOf(refrence);
});

When('the user clicks on cart icon', {timeout: 20 * 5000}, async () => {
    await page.cart.clickCartIcon();
});

When('the user removes products from the cart', {timeout: 20 * 5000}, async () => {
    await page.cart.removeItems();
});

When('the user empties the cart', {timeout: 20 * 5000}, async () => {
    await page.cart.emptyTheCart();
});

When('the user navigates to the home page', {timeout: 20 * 5000}, async () => {
    await page.common.navigateHome();
});

When('the user clicks on the refrence {string}', {timeout: 20 * 5000}, async (refrence: string) => {
    await page.partsInfo.refrenceName(refrence);
});

When('the user click on Voir mon panier button', {timeout: 20 * 5000}, async () => {
    await page.cart.clickVoirMonPanier();
});

When('the user click on remove button in cart page', {timeout: 20 * 5000}, async () => {
    await page.cart.clickOnRemoveButton();
});

When('the user clicks on validate my order button basket preview', {timeout: 20 * 5000}, async () => {
    await page.cart.clickValiderMonPanier();
});

When('the user clicks on Valider ma commande button', {timeout: 20 * 5000}, async () => {
    await page.checkoutPage.clickValiderMaCommande();
});

When('the user clicks on my orders button in order details page', {timeout: 20 * 5000}, async () => {
    await page.confirmOrderPage.clickMyOrders();
});

When('the user clicks on order details button', {timeout: 20 * 5000}, async () => {
    await page.ordersPage.clickOrderDetails();
});

When('the user clicks on retour button', {timeout: 20 * 5000}, async () => {
    await page.common.clickRetour();
});

When('the user clicks on logo', async () => {
    await page.common.navigateHome();
});

When('the user clicks on logout button', {timeout: 20 * 5000}, async () => {
    await page.common.clickLogoutButton();
    
});

When('the user clicks on vin tab in home page', async () => {
    await page.homePage.clickVinTab();
});

Then('the application should be logged in', async () => {
    const isImmatFieldDisplayed = await page.homePage.isImmatFieldDisplayed()
    chai.expect(isImmatFieldDisplayed).to.be.true;
});

Then('the Immatriculation error should appear', {timeout: 20 * 5000}, async () => {
    const isImmatErrorDisplay = await page.homePage.isImmatErrorDisplayed();
    chai.expect(isImmatErrorDisplay).to.be.true;
});

Then('the car parts with Immatriculation number as {string} should appear', {timeout: 20 * 5000}, async function (number: string) {
    const isCarPartsDisplay = await page.vehiclePartsPage.carPartsDisplay(number);
    chai.expect(isCarPartsDisplay).to.be.true;
});

Then('the car parts with vin number as {string} should appear', {timeout: 20 * 5000}, async function (number: string) {
    const isCarPartsDisplay = await page.vehiclePartsPage.carPartsDisplay(number);
    chai.expect(isCarPartsDisplay).to.be.true;
});

Then('the vehical parts result page is displayed', {timeout: 20 * 5000}, async () => {
    const resultPageDisplay = await page.partsInfo.partInfoPageDisplay()
    chai.expect(resultPageDisplay).to.be.true;
  });

Then('the vehical parts result page is displayed here', {timeout: 20 * 5000}, async () => {
    const resultPageDisplay = await page.partsInfo.partInfoPageDisplay()
    chai.expect(resultPageDisplay).to.be.true;
  });

Then('an empty cart is displayed', {timeout: 20 * 5000}, async () => {
    await page.cart.emptyCartDisplay();
  });

Then('the navigated page is {string}', {timeout: 20 * 5000}, async (url: string) => {
    chai.expect(await　BrowserUtils.getCurrentURL()).to.contain(url);
});

Then('the cart count should be {string}' , {timeout: 20 * 5000}, async (cartCount: string) => {
    const getCount: string = await page.cart.cartCountShouldBe();
    chai.expect(getCount).to.be.equal(cartCount);
});

Then('the basket preview is open' , {timeout: 20 * 5000}, async () => {
    const basketPreview = await page.cart.isBasketPreviewDisplay();
    chai.expect(basketPreview).to.be.true;
});

Then('the cart page is empty' , {timeout: 20 * 5000}, async () => {
    const resultPage = await page.cart.emptyCartPageDisplay();
    chai.expect(resultPage).to.be.true;
});

Then('the cart count should be 0' , {timeout: 20 * 5000}, async () => {
    const getCount = await page.cart.theCartCountIsZero();
    chai.expect(getCount).to.be.true;
});

Then('the order confirmation page is displayed' , {timeout: 20 * 5000}, async () => {
    const orderDetails = await page.ordersPage.orderConfirmationPageDisplay();
    chai.expect(orderDetails).to.be.true;
});

Then('the order details page is displayed', {timeout: 20 * 5000}, async () => {
    const orderDetails = await page.ordersPage.orderDetailsDisplay();
    chai.expect(orderDetails).to.be.true;
});

Then('the vim number field is displayed', async () => {
    const vinField = await page.homePage.vinNumberFieldDisplay();
    chai.expect(vinField).to.be.true;
});
