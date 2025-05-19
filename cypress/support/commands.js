import { loginPage } from './selectors';

Cypress.Commands.add('login', (username, password) => {
  cy.get(loginPage.userNameInputField).type(username);
  cy.get(loginPage.passwordInputField).type(password);
  cy.get(loginPage.loginButton).click();
});
