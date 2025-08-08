/// <reference types="cypress" />

describe(
  'CheckoutStepOnePage: Given checkout step one page is opened',
  { testIsolation: false },
  () => {
    context('CheckoutStepOnePage: When user is on checkout step one page', () => {
      before(() => {
        cy.visit('/');
        cy.login(users.standard_user.username, users.standard_user.password);
        cy.get(inventoryPage.addToCart('backpack')).click();
        cy.then(() => {
          cy.get(headerComponent.cartButton).click();
        });
        cy.get(cartPage.checkoutButton).click();
      });
      it('CheckoutStepOnePage: Then page url is valid', () => {
        cy.url().should('include', urls.checkStepOnePage);
      });

      it('CheckoutStepOnePage: Then title is visible', () => {
        cy.get(checkoutStepOnePage.title)
          .should('be.visible')
          .and('have.text', l10n.checkoutStepOnePage.title);
      });

      it('CheckoutStepOnePage: Then first name input field is visible', () => {
        cy.get(checkoutStepOnePage.checkoutInfoForm.firstNameInputField)
          .should('be.visible')
          .and('have.attr', 'placeholder', l10n.checkoutStepOnePage.fistNameInput)
          .and('have.value', '');
      });

      it('CheckoutStepOnePage: Then last name input field is visible', () => {
        cy.get(checkoutStepOnePage.checkoutInfoForm.lastNameInputField)
          .should('be.visible')
          .and('have.attr', 'placeholder', l10n.checkoutStepOnePage.lastNameInput)
          .and('have.value', '');
      });

      it('CheckoutStepOnePage: Then postcode input field is visible', () => {
        cy.get(checkoutStepOnePage.checkoutInfoForm.zipCodeInputField)
          .should('be.visible')
          .and('have.attr', 'placeholder', l10n.checkoutStepOnePage.postCodeInput)
          .and('have.value', '');
      });

      it('CheckoutStepOnePage: Then cancel button is visible', () => {
        cy.get(checkoutStepOnePage.cancelButton)
          .should('be.visible')
          .and('have.text', l10n.checkoutStepOnePage.cancelButton)
          .and('be.enabled');
      });

      it('CheckoutStepOnePage: Then continue button input field is visible', () => {
        cy.get(checkoutStepOnePage.continueButton)
          .should('be.visible')
          .and('have.value', l10n.checkoutStepOnePage.continueButton)
          .and('be.enabled');
      });

      after(() => {
        cy.get(checkoutStepOnePage.cancelButton).click();
        cy.get(cartPage.cartList.cartItem.removeButton('backpack')).click();
        cy.get(cartPage.continueShoppingButton).click();
      });
    });

    context(
      'CheckoutStepOnePage: When mandatory fields are not filled and user clicks "Continue" button',
      () => {
        before(() => {
          cy.get(inventoryPage.addToCart('backpack')).click();
          cy.then(() => {
            cy.get(headerComponent.cartButton).click();
          });
          cy.get(cartPage.checkoutButton).click();
          cy.then(() => {
            cy.get(checkoutStepOnePage.continueButton).click();
          });
        });
        it('CheckoutStepOnePage: Then firstNameIsRequired validation message is displayed', () => {
          cy.get(checkoutStepOnePage.errorMessage)
            .should('be.visible')
            .and('have.text', l10n.checkoutStepOnePage.validations.firstNameIsRequired);
        });

        it('CheckoutStepOnePage: Then lastNameIsRequired validation message is displayed', () => {
          cy.get(checkoutStepOnePage.checkoutInfoForm.firstNameInputField).type(
            users.standard_user.firstName
          );
          cy.then(() => {
            cy.get(checkoutStepOnePage.continueButton).click();
          });
          cy.get(checkoutStepOnePage.errorMessage)
            .should('be.visible')
            .and('have.text', l10n.checkoutStepOnePage.validations.lastNameIsRequired);
        });

        it('CheckoutStepOnePage: Then postCode validation message is displayed', () => {
          cy.get(checkoutStepOnePage.checkoutInfoForm.lastNameInputField).type(
            users.standard_user.lastName
          );
          cy.then(() => {
            cy.get(checkoutStepOnePage.continueButton).click();
          });
          cy.get(checkoutStepOnePage.errorMessage)
            .should('be.visible')
            .and('have.text', l10n.checkoutStepOnePage.validations.zipPostCodeIsRequired);
        });
      }
    );
  }
);
