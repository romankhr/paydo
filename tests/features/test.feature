Feature: Paydo Login Page test

@ui
@smoke
@paydo-001
  Scenario: Check presence of UI elements on Open Account page
    Given User opens Paydo Home Page
    When User clicks "Accept" Cookies on home pages
    Then User should see the "paydo.com" URL
    When User clicks "Open account" link button
    Then The page title should be "Create account"
    Then User should see the "account.paydo.com" URL
    Then Verify the h1 text "Create a personal account"
    Then Verify the 'Back to Homepage' is displayed on Account Page
    Then Verify the 'Log In' is displayed on Account Page
    Then Verify the 'Email' is displayed on Account Page
    Then Verify the 'Password' is displayed on Account Page
    Then Verify the 'Confirm password' is displayed on Account Page
    Then Verify the 'Create an account' is displayed on Account Page  
    Then Verify the 'Switch to create Business account' is displayed on Account Page 
    Then Verify the 'Enter email' fields are editable on Account Page 
    Then Verify the 'Enter password' fields are editable on Account Page 
    Then Verify the Paydo logo is displayed
    
@ui
@smoke
@paydo-002
  Scenario: Verify error message is displayed for invalid login credentials
    Given User opens Paydo Home Page
    When User clicks "Accept" Cookies on home pages
    Then User should see the "paydo.com" URL
    When User clicks "Log In" link button
    Then The page title should be "Welcome back"
    Then User should see the "account.paydo.com" URL
    Then Verify the h1 text "Welcome back"
    When User inserts "Tests@tests.com" in email input field on Account page
    When User inserts "Password" in password input field on Account page
    When User clicks "Log in" button
    Then User should see the error message "The email address or password you entered is incorrect"
 