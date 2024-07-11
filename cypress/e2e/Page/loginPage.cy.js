//login to the applocation
class LoginPage{
 consrtuctor() {
    this.url = "/" ;
    this.loginButton = 'button[type="submit"]';
    this.emailAddress = 'input[name="email"]';
    this.password = 'input[name="password"]';
   // this.errorMessage = ".";
    this.logout = ".list-group-item";
 }
 openUrl() {
    cy.visit(this.url);
  }

  enteremailAddress(email) {
    cy.get(this.emailAddress).type(email);
  }
  enterPassword(psw) {
    cy.get(this.password).type(psw);
  }
  clickLogin() {
    cy.get(this.loginButton).click();
  }
  


}

export default new LoginPage();