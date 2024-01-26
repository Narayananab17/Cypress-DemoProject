// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
var CryptoJS = require("crypto-js");


Cypress.Commands.add('decryptAndType', (encryptedText,secretKey,selector) => {  
    var decryptedText= CryptoJS.AES.decrypt(encryptedText,secretKey).toString(CryptoJS.enc.Utf8);
    cy.get(selector).should('be.visible').type(decryptedText)
})

Cypress.Commands.add('enterUsernameAndPassword', () => { 
cy.decryptAndType(Cypress.env('username'), Cypress.env('secretKey'),'[name="username"]');
cy.decryptAndType(Cypress.env('password'), Cypress.env('secretKey'),'[name="password"]');
 })




//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })