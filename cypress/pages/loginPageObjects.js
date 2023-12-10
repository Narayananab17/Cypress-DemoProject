class LoginPage
{
 elements={
    userName: ()=> cy.xpath('//input[@id="inputUsername"]'),
    password: ()=> cy.xpath('//input[@name="inputPassword"]'),
    signInBtn: ()=> cy.xpath('//button[@class="submit signInBtn"]'),
    errorMsg: ()=> cy.xpath('//p[@class="error"]'),
    forgotPwd: ()=> cy.xpath('//a[text()="Forgot your password?"]'),
    name: ()=> cy.xpath('//input[@placeholder="Name"]'),
    email: ()=> cy.xpath('//input[@placeholder="Email"]'),
    phoneNo: ()=> cy.xpath('//input[@placeholder="Phone Number"]'),
    resetBtn: ()=> cy.xpath('//button[@class="reset-pwd-btn"]'),
    msgInfo: ()=> cy.get('.infoMsg').should('be.visible'),
    checkBox1: ()=> cy.get('#chkboxOne'),
    CheckBox2: ()=> cy.get('#chkboxTwo'),
    logOutBtn: ()=> cy.get('button.logout-btn'),
 }
 UserName(userName){
    this.elements.userName().should('be.visible').type(userName)
 }
 PassWord(passWord){

    this.elements.password().should('be.visible').type(passWord)
 }
 ClickSignInBtn(){
   this.elements.signInBtn().should('be.visible').click()
 }
 CheckErrorMsg(errorMsg){
   this.elements.errorMsg().should('include.text', errorMsg)
 }
 ClickForgotPswd(){
   this.elements.forgotPwd().should('be.visible').click()
 }
 Type_Name(name){
   this.elements.name().should('be.visible').type(name)
 }
 Type_EmailID(email){
   this.elements.email().should('be.visible').type(email)
 }
 Type_MobileNO(phoneNo){
   this.elements.phoneNo().should('be.visible').type(phoneNo)
 }
 ClickResetBtn(){
   this.elements.resetBtn().should('be.visible').click()
 }
 ClickCheckBox1(){
   this.elements.checkBox1().should('be.visible').click()
 }
 ClickCheckBox2(){
   this.elements.CheckBox2().should('be.visible').click()
 }
 ValidateLoggingMsg(welcomeMsg,UserName){
   cy.xpath('//p[contains(text(),"You are successfully logged in")]').should('include.text', welcomeMsg)
   cy.xpath('//h2').should('include.text', UserName)
 }
 ClickLogOutBtn(){
   this.elements.logOutBtn().should('be.visible').click()
 }
 SignInPage_Title(text){
   cy.xpath('//h1[text()="Sign in"]').should('have.text', text)
 }


}
module.exports = new LoginPage();