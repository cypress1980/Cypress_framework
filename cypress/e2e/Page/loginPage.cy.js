//login to the applocation
class LoginPage {
 consrtuctor() {
    this.url = "/" ; //base url is saved in cpress.config.js
    this.loginButton = 'button[type="submit"]';
    this.emailAddress = 'input[name="email"]';
    this.password = 'input[name="password"]';
   // this.errorMessage = ".";
    this.logout = ".list-group-item";
 }

 openUrl() {
    cy.visit(this.url);
  }

  loginbuttonexist() {
    //cy.get(this.LoginButton).contains('Login').should('be.visible');
    return cy.get(this.loginButton);
  }
  enteremailAddress(email) {
    //cy.get(this.emailAddress).type(email);
    cy.get(this.emailAddress);

  }

  enterPassword(psw) {
    //cy.get(this.password).type(psw);
    cy.get(this.password);
  }

  clickLogin() {
    cy.get(this.loginButton).click();
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