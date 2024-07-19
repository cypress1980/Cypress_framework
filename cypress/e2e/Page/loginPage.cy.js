//login to the applocation
class LoginPage {
  constructor() {
    this.loginButton = '[value="Login"]';
    this.emailAddress = 'input[name="email"]';
    this.password = 'input[name="password"]';
    this.logout = ".list-group-item";
    this.firstName = "#input-firstname";
    this.lastName = "#input-lastname";
    this.telephoneNumber = "#input-telephone";
  }

  openUrl() {
    cy.visit("", { failOnStatusCode: false });
  }

  loginbuttonexist() {
    cy.get(this.loginButton).should("be.visible");
  }
  enteremailAddress(email) {
    cy.get(this.emailAddress).type(email);
  }
  enterPassword(password) {
    cy.get(this.password).type(password);
  }
  clickLogin() {
    cy.get(this.loginButton).click();
  }

  usr_logged_in() {
    cy.get("h2.card-header.h5").contains("My Account").should("be.visible");
  }
  user_logout() {
    cy.get(this.logout).eq(13).click();
  }

  getErrorMessage() {
    cy.contains(" Warning");
  }

  fillAccountInformation(accountInfo) {
    cy.get(this.firstName).clear().type(accountInfo.firstName);
    cy.get(this.lastName).clear().type(accountInfo.lastName);
    cy.get(this.telephoneNumber).clear().type(accountInfo.telephoneNumber);
    cy.get('[value="Continue"]').click()
    cy.contains('Success:').should('be.visible')
    cy.get('.list-group-item').eq(1).click()
  }
}
module.exports = LoginPage;
