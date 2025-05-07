const selectors = require('../../support/selectors');
import l10n from '../../support/l10n.json';
import users from '../../sensitive-data/dev-users.json';
import '../../support/commands';
import { pages } from '../../support/urls';

describe('LoginPage: Given Login page is opened', { testIsolation: false }, () => {
  context('LoginPage: When user reviews the page', () => {
    before(() => {
      cy.visit('/');
    });

    it('LoginPage: Then user see empty Username field', () => {
      cy.get(selectors.loginPage.userNameInputField)
        .should('have.attr', 'placeholder', l10n.en.loginPage.form.userNameInputField)
        .and('have.value', '')
        .and('be.visible');
    });

    it('LoginPage: Then user see empty Password field', () => {
      cy.get(selectors.loginPage.passwordInputField)
        .should('have.attr', 'placeholder', l10n.en.loginPage.form.passwordInputField)
        .and('have.value', '')
        .and('have.attr', 'type', 'password')
        .and('be.visible');
    });

    it('LoginPage: Then user see Login button', () => {
      cy.get(selectors.loginPage.loginButton)
        .should('have.value', l10n.en.loginPage.form.loginButton)
        .and('be.visible')
        .and('be.enabled');
    });
  });

  context('LoginPage: When user logs in with valid credentials', () => {
    before(() => {
      cy.visit('/');
      cy.login(users.standard_user.username, users.standard_user.password);
    });

    it('Login Page: Then user should be redirected to the Inventory page', () => {
      cy.url().should('eq', pages.inventoryPage);
    });

    it('Login Page: Then user can see inventry list on the Inventory page ', () => {
      cy.get(selectors.inventoryPage.inventory_list).should('be.visible');
    });
  });

  context.skip('LoginPage: When user logs in with empty username', () => {});

  context.skip('LoginPage: When user logs in with empty password', () => {});

  context.skip('LoginPage: When user logs in with invalid username', () => {});

  context.skip('LoginPage: When user logs in with invalid password', () => {});

  context.skip('LoginPage: When user logs in with locked_out_user credentials', () => {});

  context.skip('LoginPage: When user logs in with problem_user credentials', () => {});
});
