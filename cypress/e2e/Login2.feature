Feature: E2E Login Automation

  I want to Automate Login Page

  Background:
    Given I open Login page

  @Login-1
  Scenario:Invalid Username & Password
    When I enter Invalid Username "Narayanan" and Password "Narayanan@123"
    And I Click SignIn Button
    Then I Can see the error msg Like this "Incorrect username or password"

  @Login-2
  Scenario:Reset Password
    When I Click Forgot your Password to reset Password
    Then I Enter Name "Narayanan" email "Narayanan@gmail.com" PhoneNumber "8870325797"
    And I Click Reset Login Button
    Then Login Password should Display

  @Login-3
  Scenario:Sign in Successfully
    When I Enter Valid Username "Narayanan" and Password and Click CheckBoxes
    Then I Click SignIn Button
    And I Can See a msg "You are successfully logged in" with My Username "Narayanan"
    Then I ClicK LogOut Buuton
    And I return back "Sign out" Page
