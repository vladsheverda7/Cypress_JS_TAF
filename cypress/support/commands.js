import { loginPage } from './selectors';

Cypress.Commands.add('login', (username, password) => {
  cy.get(loginPage.userNameInputField).type(username);
  cy.get(loginPage.passwordInputField).type(password);
  cy.get(loginPage.loginButton).click();
});

Cypress.Commands.add('logout', () => {
  cy.get(headerComponent.sidebar.burgerMenu).click();
  cy.get(headerComponent.sidebar.logout).click();
});
