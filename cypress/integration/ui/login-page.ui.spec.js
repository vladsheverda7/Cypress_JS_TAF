const { loginPage } = require('../../support/selectors');
import l10n from '../../support/l10n.json';

describe('LoginPage: Given Login page is opened', { testIsolation: false }, () => {
  before(() => {
    cy.visit('/');
  });

  context('LoginPage: When user reviews the page', () => {
    it('LoginPage: Then user see empty Username field', () => {
      cy.get(loginPage.userNameInputField)
        .should('have.attr', 'placeholder', l10n.en.loginPage.form.userNameInputField)
        .and('have.value', '')
        .and('be.visible');
    });

    it('LoginPage: Then user see empty Password field', () => {
      cy.get(loginPage.passwordInputField)
        .should('have.attr', 'placeholder', l10n.en.loginPage.form.passwordInputField)
        .and('have.value', '')
        .and('have.attr', 'type', 'password')
        .and('be.visible');
    });

    it('LoginPage: Then user see Login button', () => {
      cy.get(loginPage.loginButton)
        .should('have.value', l10n.en.loginPage.form.loginButton)
        .and('be.visible')
        .and('be.enabled');
    });
  });
});
