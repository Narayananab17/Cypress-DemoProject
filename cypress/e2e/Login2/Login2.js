import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from '../../pages/loginPageObjects'

var pswdText = {};


Given('I open Login page', () => {
  cy.visit('/')
  cy.url().should('include', '/locatorspractice')
})

When('I enter Invalid Username {string} and Password {string}', (userName, Password) => {
  loginPage.UserName(userName)
  loginPage.PassWord(Password)
})

Then('I Click SignIn Button', () => {
  loginPage.ClickSignInBtn()
})

Then('I Can see the error msg Like this {string}', (errorMsg) => {
  loginPage.CheckErrorMsg(errorMsg)
})

When('I Click Forgot your Password to reset Password', () => {
  loginPage.ClickForgotPswd()
})

Then('I Enter Name {string} email {string} PhoneNumber {string}', (name, eamil, phoneNo) => {
  loginPage.Type_Name(name)
  loginPage.Type_EmailID(eamil)
  loginPage.Type_MobileNO(phoneNo)
})

Then('I Click Reset Login Button', () => {
  loginPage.ClickResetBtn()
})

Then('Login Password should Display', () => {
  loginPage.elements.msgInfo().then((text) => {
    cy.log(text.text())
    const fullText = text.text()
    const splitText = fullText.split(' ');
    const PasswordTxt = splitText[4].replaceAll("'", '')
    cy.log(PasswordTxt)
    expect(text).to.contain(PasswordTxt)
    pswdText.Password = PasswordTxt
  })
})

/*When('I Click Goto Login to Login', () => {
  cy.get('.go-to-login-btn').click()
})*/

Then('I Enter Valid Username {string} and Password and Click CheckBoxes', (userName) => {
  loginPage.UserName(userName)
  loginPage.PassWord(pswdText.Password)
  loginPage.ClickCheckBox1()
  loginPage.ClickCheckBox2()
})

Then('I Can See a msg {string} with My Username {string}', (welcomeMsg, UserName) => {
  loginPage.ValidateLoggingMsg(welcomeMsg,UserName)
})

Then('I ClicK LogOut Buuton', () => {
  loginPage.ClickLogOutBtn()
})

Then('I return back {string} Page', (text) => {
  loginPage.SignInPage_Title(text)
})