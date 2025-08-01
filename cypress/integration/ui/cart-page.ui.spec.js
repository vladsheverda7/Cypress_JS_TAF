/// <reference types="cypress" />

describe('CartPage: Given Cart Page is opened', { testIsolation: false }, () => {
  before(() => {
    cy.visit('/');
    cy.login(users.standard_user.username, users.standard_user.password);
  });

  context('InventoryPage: When the user clicks cart button', () => {
    before(() => {
      cy.get(headerComponent.cartButton).click();
    });
    it('CartPage: Then cart page is opened', () => {
      cy.url().should('include', urls.cartPage);
    });

    it('CartPage: Then title is visible', () => {
      cy.get(cartPage.title).should('be.visible').and('have.text', l10n.cartPage.title);
    });

    it('CartPage: Then product qty label is visible in product table', () => {
      cy.get(cartPage.cartList.qtyLabel)
        .should('be.visible')
        .and('have.text', l10n.cartPage.productTable.quantity);
    });

    it('CartPage: Then product description label is visible in product table', () => {
      cy.get(cartPage.cartList.descriptionLabel)
        .should('be.visible')
        .and('have.text', l10n.cartPage.productTable.description);
    });

    it('CartPage: Then continue shopping button is visible', () => {
      cy.get(cartPage.continueShoppingButton)
        .should('be.visible')
        .and('have.text', l10n.cartPage.continueShoppingButton);
    });

    it('CartPage: Then checkout button is visible', () => {
      cy.get(cartPage.checkoutButton)
        .should('be.visible')
        .and('have.text', l10n.cartPage.checkoutButton);
    });
  });
});
