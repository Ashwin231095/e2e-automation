@high
Feature: Search Renault brand via Model Number to validate the order
    As a user Logged in R2 user to search Renault brand via Model to validate the order

    Scenario: Logged in R2 user to search Renault brand via Model to validate the order.
        Given the user has the application url
        Then there is the login module displayed

        When the user clicks on the login button
        When user logins into pre-prod with credentials id "" and password ""
        Then the application should be logged in

        When the user accepts the cookies

        When the user clicks on model tab
        When the user searches for vehicle using the brands
        Then the car parts with model as "RENAULT DUSTER 1" should appear
        
        When the user views the result page selecting a brand "Filtre à air"

        When the user clicks on thumbnail image
        Then the vehical parts result page is displayed

        When the user clicks on AJOUTER AU PANIER button for "FILTRE AIR"
        When the user clicks on cart icon
        When the user clicks on validate my order button basket preview
        When the user clicks on Valider ma commande button
        Then the order confirmation page is displayed
        Then the order details page is displayed
        When the user clicks on my orders button in order details page
        Then the navigated page is "/account/shopping/orders"
        When the user clicks on order details button
        Then the navigated page is "/account/shopping/orders/order2"
        When the user clicks on retour button
        Then the navigated page is "/account/shopping/orders"
