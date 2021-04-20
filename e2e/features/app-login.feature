Feature: Login to the application
    As a user
    I want to be able to login the application

    Scenario: Navigate to the application.
        Given the user has the application url
        When the user navigates to the application
        Then there is the login module displayed
