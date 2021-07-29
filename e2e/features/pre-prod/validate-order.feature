@low
Feature: Search Renault brand via Immatriculation to validate the order
    As a user Logged in R2 user to search Renault brand via Immatriculation to validate the order

    Scenario: Logged in R2 user to search Renault brand via Immatriculation to validate the order.
        Given the user has the application url
        Then there is the login module displayed

        When the user clicks on the login button
        When user logins into pre-prod with credentials id "G003417" and password "pu5da5"
        Then the application should be logged in

        When the user searches for vehicle with Immatriculation number as "AC123AC"
        Then the car parts with Immatriculation number as "AC-123-AC" should appear

        When the user accepts the cookies

        When the user views the result page selecting a brand "Filtre à huile" in grid page
        # Then the vehical parts result page is displayed

        # When the user clicks on AJOUTER AU PANIER button for "MOTRIO PREMIUM 5W30 C2 5L / 1 bidon(s) de 5 litre(s)"
        # When the user clicks on cart icon
        # When the user clicks on validate my order button basket preview
        # When the user clicks on Valider ma commande button
        # Then the order confirmation page is displayed
        # Then the order details page is displayed
        # When the user clicks on my orders button in order details page
        # Then the navigated page is "/account/shopping/orders"
        # When the user clicks on order details button
        # Then the navigated page is "/account/shopping/orders/order2"
        # When the user clicks on retour button
        # Then the navigated page is "/account/shopping/orders"
        When the user clicks on logout button
        

        
