import { CartPage } from "./cart.po";
import { CheckoutPage } from "./checkout.po";
import { Common } from "./common.po";
import { ConfirmOrderPage } from "./confirm-order.po";
import { HomePage } from "./home.po";
import { LoginPage } from "./login.po";
import { OrdersPage } from "./orders.po";
import { VehiclePartsInfoPage } from "./vehicle-parts-info.po";
import { VehiclePartsPage } from "./vehicle-parts.po";

export class PageObjects {
    public loginPage: LoginPage;
    public homePage: HomePage;
    public vehiclePartsPage: VehiclePartsPage;
    public partsInfo: VehiclePartsInfoPage;
    public cart: CartPage;
    public common: Common;
    public checkoutPage: CheckoutPage;
    public confirmOrderPage: ConfirmOrderPage;
    public ordersPage: OrdersPage

    constructor(){
        this.loginPage = new LoginPage();
        this.homePage = new HomePage();
        this.vehiclePartsPage = new VehiclePartsPage();
        this.partsInfo = new VehiclePartsInfoPage();
        this.cart = new CartPage();
        this.common = new Common();
        this.checkoutPage = new CheckoutPage();
        this.confirmOrderPage = new ConfirmOrderPage();
        this.ordersPage = new OrdersPage();
    }
}
