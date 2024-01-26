Feature: OrangeHRM Login Automation

  I want to Automate OrangeHRM Login Page

  Scenario: Login with valid credentials
    Given I navigate to the OrangeHRM Website
    When I enter valid Username and Password
    And I click Login Button
    Then I should see "Dashboard"

