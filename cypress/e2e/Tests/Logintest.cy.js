// <reference types="cypress" />

//import LoginPage from "../pages/loginpage.cy.js";
import LoginPage from "../pages/loginpage.cy.js";

describe('Login Test', () => {
    let testdata;

    const loginpage = new LoginPage();

beforeEach(() => {
    cy.fixture('credential_file').then( (testdata_original)=> {
        testdata = testdata_original;
      });
        cy.visit('/');
        
       
    });


    it('Login Test', () => {
        //cy.log(testdata.username); this is how you can log the data:::

        loginpage.loginbuttonexist().contains('Login').should('be.visible');
   
    })

    it('valid credentials', () => {
        loginpage.enteremailAddress(testdata.username);
        loginpage.enterPassword(testdata.password);
        loginpage.clickLogin();
        cy.url().should('include', '/web/index.php/dashboard/index');
        loginpage.usr_logged_in();
        cy.wait(1000);
        loginpage.user_logout();

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