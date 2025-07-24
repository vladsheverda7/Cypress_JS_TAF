describe('LoginPage: Given Login page is opened', { testIsolation: false }, () => {
  context('LoginPage: When user reviews the page', () => {
    before(() => {
      cy.visit('/');
    });
    it('LoginPage: Then user see empty Username field', () => {
      cy.get(loginPage.userNameInputField)
        .should('have.attr', 'placeholder', l10n.loginPage.form.userNameInputField)
        .and('have.value', '')
        .and('be.visible');
    });

    it('LoginPage: Then user see empty Password field', () => {
      cy.get(loginPage.passwordInputField)
        .should('have.attr', 'placeholder', l10n.loginPage.form.passwordInputField)
        .and('have.value', '')
        .and('have.attr', 'type', 'password')
        .and('be.visible');
    });

    it('LoginPage: Then user see Login button', () => {
      cy.get(loginPage.loginButton)
        .should('have.value', l10n.loginPage.form.loginButton)
        .and('be.visible')
        .and('be.enabled');
    });
  });

  context('LoginPage: When user logs in with valid credentials', () => {
    before(() => {
      cy.login(users.standard_user.username, users.standard_user.password);
    });

    it('Login Page: Then user should be redirected to the Inventory page', () => {
      cy.url().should('eq', urls.inventoryPage);
    });

    it('Login Page: Then user can see inventory list on the Inventory page ', () => {
      cy.get(inventoryPage.inventoryList).should('be.visible');
    });
    after(() => {
      cy.logout();
    });
  });

  context('LoginPage: When user logs in with empty username', () => {
    before(() => {
      cy.visit('/');
      cy.get(loginPage.passwordInputField).type(users.standard_user.password);
      cy.get(loginPage.loginButton).click();
    });
    it('Login Page: Then the user sees username validation message', () => {
      cy.get(loginPage.errorMessage)
        .should('have.text', l10n.loginPage.validations.usernameIsRequired)
        .and('be.visible');
    });
  });

  context('LoginPage: When user logs in with empty password', () => {
    before(() => {
      cy.visit('/');
      cy.get(loginPage.userNameInputField).type(users.standard_user.username);
      cy.get(loginPage.loginButton).click();
    });
    it('Login Page: Then the user sees password validation message', () => {
      cy.get(loginPage.errorMessage)
        .should('have.text', l10n.loginPage.validations.passwordIsRequired)
        .and('be.visible');
    });
  });

  context('LoginPage: When user logs in with invalid username', () => {
    before(() => {
      cy.visit('/');
      cy.login('invalid', users.standard_user.password);
    });
    it('Login Page: Then the user sees username validation message', () => {
      cy.get(loginPage.errorMessage)
        .should('have.text', l10n.loginPage.validations.userDoesNotExist)
        .and('be.visible');
    });
  });

  context('LoginPage: When user logs in with invalid password', () => {
    before(() => {
      cy.visit('/');
      cy.login(users.standard_user.username, 'invalid');
    });
    it('Login Page: Then the user sees username validation message', () => {
      cy.get(loginPage.errorMessage)
        .should('have.text', l10n.loginPage.validations.userDoesNotExist)
        .and('be.visible');
    });
  });

  context('LoginPage: When user logs in with locked_out_user credentials', () => {
    before(() => {
      cy.visit('/');
      cy.login(users.locked_out_user.username, users.locked_out_user.password);
    });
    it('Login Page: Then the user sees username validation message', () => {
      cy.get(loginPage.errorMessage)
        .should('have.text', l10n.loginPage.validations.userIsLockedOut)
        .and('be.visible');
    });
  });

  context('LoginPage: When user logs out of the application', () => {
    before(() => {
      cy.visit('/');
      cy.login(users.standard_user.username, users.standard_user.password);
      cy.logout();
    });
    it('LoginPage: Then user see empty Username field', () => {
      cy.get(loginPage.userNameInputField)
        .should('have.attr', 'placeholder', l10n.loginPage.form.userNameInputField)
        .and('have.value', '')
        .and('be.visible');
    });

    it('LoginPage: Then user see empty Password field', () => {
      cy.get(loginPage.passwordInputField)
        .should('have.attr', 'placeholder', l10n.loginPage.form.passwordInputField)
        .and('have.value', '')
        .and('have.attr', 'type', 'password')
        .and('be.visible');
    });

    it('LoginPage: Then user see Login button', () => {
      cy.get(loginPage.loginButton)
        .should('have.value', l10n.loginPage.form.loginButton)
        .and('be.visible')
        .and('be.enabled');
    });
  });
});
