Feature: Make an order
    As a user
    Logged in R2 user to search Renault brand via Immatriculation to make the order

    Scenario: Logged in R2 user to search Renault brand via Immatriculation  to make the order.
        Given the user has the application url
        When the user navigates to the application
        Then there is the login module displayed

        Given that user navigates to page with url as "https://re7.portaildigital.ram.aws.renault.com/login"
        
        When the user clicks on the login button
        When the user invalid R2 username and password as "d015332" and "co7002898"
        
        When the user clicks on the login button
        When user logins in with credentials id "d015224" and password "co7006"
        Then the application should be logged in

        When the user searches for vehicle with Immatriculation number as "ZZZZZZZZ"
        Then the Immatriculation error should appear

        When the user searches for vehicle with Immatriculation number as "CC125AN"
        Then the car parts with Immatriculation number as "CC-125-AN" should appear

        When the user views the result page selecting a brand
        Then the vehical parts result page is displayed

        When the user clicks on AJOUTER AU PANIER button

        When the user removes products from the cart
        Then an empty cart is displayed

        When the user clicks on AJOUTER AU PANIER button with multiple quantity of products

        When the user removes products from the cart
        Then an empty cart is displayed
