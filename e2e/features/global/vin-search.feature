Feature: Search Renault brand via VIN to make the order
    As a user Logged in R2 user to search Renault brand via VIN to make the order

    Scenario: Logged in R2 user to search Renault brand via VIN  to make the order.
        Given the user has the application url
        When the user navigates to the application
        Then there is the login module displayed
        
        # When the user clicks on the login button
        # When the user invalid R2 username and password as "212321" and "21312314"
        
        When the user clicks on the login button
        When user logins in with credentials id "" and password ""
        Then the application should be logged in

        # When the user clicks on vin tab in home page
        # Then the vim number field is displayed

        # When the user searches for vehicle with vin number as "VF1KG1GB634092628"
        # Then the car parts with vin number as "VF1KG1GB634092628" should appear

        # When the user views the result page selecting a brand "Filtre à air"
        # Then the vehical parts result page is displayed

        # When the user clicks on AJOUTER AU PANIER button for "FILTRE AIR EQP"

        # When the user clicks on cart icon
        # When the user removes products from the cart
        # Then an empty cart is displayed

        When the user accepts the cookies

        # When the user clicks on AJOUTER AU PANIER button with multiple quantity of products for "FILTRE AIR EQP"

        # When the user clicks on cart icon
        # When the user removes products from the cart
        # Then an empty cart is displayed

        # When the user navigates to the home page
        # When the user clicks on vin tab in home page
        # Then the vim number field is displayed

        # When the user searches for vehicle with vin number as "VF1KG1GB634092628"
        # Then the car parts with vin number as "VF1KG1GB634092628" should appear

        # When the user views the result page selecting a brand "Filtre à carburant"
        # Then the vehical parts result page is displayed here

        # When the user clicks on AJOUTER AU PANIER button for "SUPPORT FILTRE GAZOLE"

        # When the user clicks on AJOUTER AU PANIER button for "PROTECTEUR FILTRE GAZOLE"
        # When the user empties the cart
        # Then an empty cart is displayed

        # When the user navigates to the home page
        # When the user clicks on vin tab in home page
        # Then the vim number field is displayed

        # When the user searches for vehicle with vin number as "VF1KG1GB634092628"
        # Then the car parts with vin number as "VF1KG1GB634092628" should appear
        # When the user views the result page selecting a brand "Filtre à air"
        # Then the vehical parts result page is displayed
        # When the user clicks on the refrence "FILTRE AIR EQP"
        # Then the navigated page is "/partsheetrenaultdetails"

        # When the user navigates to the home page
        # When the user clicks on vin tab in home page
        # Then the vim number field is displayed

        # When the user searches for vehicle with vin number as "VF1FLBMD69Y324949"
        # Then the car parts with vin number as "VF1FLBMD69Y324949" should appear

        # When the user views the result page selecting a brand "Filtre à air"
        # Then the vehical parts result page is displayed

        # When the user clicks on AJOUTER AU PANIER button for "FILTRE AIR"
        # Then the cart count should be "1"

        # When the user clicks on cart icon
        # Then the basket preview is open

        # When the user click on Voir mon panier button
        # Then the navigated page is "/cart"

        # When the user empties the cart
        # Then an empty cart is displayed

        # When the user navigates to the home page
        # When the user clicks on vin tab in home page
        # Then the vim number field is displayed

        # When the user searches for vehicle with vin number as "VF1FLBMD69Y324949"
        # Then the car parts with vin number as "VF1FLBMD69Y324949" should appear

        # When the user views the result page selecting a brand "Filtre à air"
        # Then the vehical parts result page is displayed

        # When the user clicks on AJOUTER AU PANIER button for "FILTRE AIR"
        # When the user clicks on cart icon

        # When the user click on Voir mon panier button
        # When the user click on remove button in cart page
        # Then the cart page is empty

        # Then the cart count should be 0

        # When the user navigates to the home page
        # When the user clicks on vin tab in home page
        # Then the vim number field is displayed

        # When the user searches for vehicle with vin number as "VF1FLBMD69Y324949"
        # Then the car parts with vin number as "VF1FLBMD69Y324949" should appear

        # When the user views the result page selecting a brand "Filtre à air"
        # Then the vehical parts result page is displayed

        # When the user clicks on AJOUTER AU PANIER button for "FILTRE AIR"
        # When the user clicks on cart icon
        # When the user clicks on validate my order button basket preview
        # Then the navigated page is "/checkout"
        # When the user empties the cart
        # Then an empty cart is displayed
        

        # When the user navigates to the home page
        When the user clicks on vin tab in home page
        Then the vim number field is displayed

        When the user searches for vehicle with vin number as "VF1KG1GB634092628"
        Then the car parts with vin number as "VF1KG1GB634092628" should appear

        When the user views the result page selecting a brand "Filtre à air"
        Then the vehical parts result page is displayed

        When the user clicks on AJOUTER AU PANIER button for "FILTRE AIR EQP"
        When the user clicks on cart icon
        When the user clicks on validate my order button basket preview
        When the user clicks on Valider ma commande button
        Then the order confirmation page is displayed
        Then the order details page is displayed
        When the user clicks on my orders button in order details page
        Then the navigated page is "/account/shopping/orders"
        # When the user clicks on order details button
        # Then the navigated page is "/account/shopping/orders/order2" 
        # When the user clicks on retour button
        # Then the navigated page is "/account/shopping/orders"
        # When the user clicks on logo
        # Then the navigated page is "https://re7.portaildigital.ram.aws.renault.com/"
        # When the user clicks on logout button
        # Then the navigated page is "https://re7.portaildigital.ram.aws.renault.com/"
