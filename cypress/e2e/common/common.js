import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
var CryptoJS = require("crypto-js");
Given('I practicing Js and cypress practice',()=>{
// Encrypt
var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123');
cy.log(ciphertext.toString());
// Decrypt
var plaintext= CryptoJS.AES.decrypt('U2FsdGVkX1/PtD4AZUkDBXeGvYzpFjQncvpB5MYSJPo=', 'secret key 123').toString(CryptoJS.enc.Utf8);
cy.log(plaintext);
})