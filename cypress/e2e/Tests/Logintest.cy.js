// <reference types="cypress" />

import LoginPage from "../Page/loginPage.cy.js";
describe('Login Test', () => {
    let testdata;
    const loginpage = new LoginPage();

    beforeEach(() => {
    cy.fixture('credential.json').then( (testdata_original)=> {
        testdata = testdata_original;
      });
      cy.log("Data from fixture file ---->>>> ",testdata)
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
    });

    it.skip('Login Test', () => {
        loginpage.loginbuttonexist().contains('Login').should('be.visible');
    })

    it('valid credential', () => {
        loginpage.enteremailAddress(testdata.emailAddress);
        loginpage.enterPassword(testdata.password);
        loginpage.clickLogin();
        cy.url().should('include', 'https://ecommerce-playground.lambdatest.io/index.php?route=account/account');
        loginpage.usr_logged_in();
        //cy.wait(1000);
        //loginpage.user_logout();

    })

    it('Enter wrong email and password', () => {
        loginpage.enterUsername(testdata.invalid_username);
        loginpage.enterPassword(testdata.invalid_password);
        loginpage.clickLogin();
        cy.url().should('not.include' , '/web/index.php/dashboard/index');
        loginpage.getErrorMessage("Invalid credentials");
    })

    it('Enter empty email and password', () => {
        loginpage.clickLogin();
        cy.contains('Required').should('be.visible');
        cy.url().should('not.include' , '/web/index.php/dashboard/index');
    })


});