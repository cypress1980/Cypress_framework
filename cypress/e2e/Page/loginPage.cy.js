//login to the applocation
class LoginPage {

  

  emailAddress ='[id="input-email"]'
 /*consrtuctor() {
    this.loginButton = '[type="submit"]';
    this.emailAddress = '[id="input-email"]';
    this.password = '[id="input-password"]';
   // this.errorMessage = ".";
    this.logout = ".list-group-item";
 }*/

 openUrl() {
    cy.visit(this.url);
  }

  loginbuttonexist() {
    //cy.get(this.LoginButton).contains('Login').should('be.visible');
     //cy.get(this.loginButton);
  }
  enteremailAddress(email) {
    //cy.get(this.emailAddress).type(email);
    cy.get(emailAddress).type(email);
  }

  enterPassword(psw) {
     cy.get(this.password).type(psw);
    //cy.get(this.password);
  }

  clickLogin() {
    cy.get(this.loginButton).eq(0).click();
  }

  usr_logged_in() {
    cy.get("h2.card-header.h5")
      .contains("My Account")
      .should("be.visible");
  }
  //user_logout() {
    //cy.get(this.logout).click();
    //cy.get('[role="menuitem"]').eq(3).click();
    //cy.get(this.LoginB).contains("Login").should("be.visible");

  //}

}

module.exports = LoginPage;