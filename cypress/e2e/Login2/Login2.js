import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I navigate to the OrangeHRM Website', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.url().should('include', '/login')
})

When('I enter valid Username and Password', () => {
  cy.enterUsernameAndPassword()
})

Then('I click Login Button', () => {
  cy.get('[type="submit"]').should('be.visible').click()
})

Then('I should see {string}', (title) => {
  cy.get('.oxd-topbar-header-breadcrumb').should('have.text', title)
})