const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");


module.exports = defineConfig({

  e2e: {
    baseUrl:  'https://rahulshettyacademy.com/locatorspractice',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    defaultCommandTimeout: 14000,
    specPattern: "cypress/e2e/*.feature",
    screenshotOnRunFailure: true,
    supportFile: 'cypress/support/index.{js,jsx,ts,tsx}',
    supportFolder: false,
  },
  env: {
    username: 'U2FsdGVkX18SHOLyDefzgnBRa0GDWuPMZjYLeWD3ZWU=',
    password: 'U2FsdGVkX18IXLO5Kyr2+pzQhPjUu0HJh8FYLb16olE=',
    secretKey: 'secret key 123'
  },
   
});
