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

  context('CartPage: When the user adds product to cart', () => {
    before(() => {
      cy.get(cartPage.continueShoppingButton).click();
      cy.get(inventoryPage.addToCart('backpack')).click();
      cy.get(headerComponent.cartButton).click();
    });
    it('CartPage: Then item qty is visible', () => {
      cy.get(cartPage.cartList.cartItem.itemQty).then(($qtyLabel) => {
        const isQtyExist = [...$qtyLabel].every((x) => x.innerText === '1');
        expect(isQtyExist).to.be.true;
      });
    });
    it('CartPage: Then item name is visible', () => {
      cy.get(cartPage.cartList.cartItem.itemName).then(($itemNames) => {
        const isNameExist = [...$itemNames].some((x) => x.innerText === products[0].name);
        expect(isNameExist).to.be.true;
      });
    });
    it('CartPage: Then item description is visible', () => {
      cy.get(cartPage.cartList.cartItem.itemDescription).then(($itemDescriptions) => {
        const isDescriptionExist = [...$itemDescriptions].some(
          (x) => x.innerText === products[0].description
        );
        expect(isDescriptionExist).to.be.true;
      });
    });
    it('CartPage: Then item price is visible', () => {
      cy.get(cartPage.cartList.cartItem.itemPrice).then(($itemPrices) => {
        const isPriceExist = [...$itemPrices].some(
          (x) => x.innerText.replace('$', '') === products[0].price
        );
        expect(isPriceExist).to.be.true;
      });
    });
    it('CartPage: Then remove button for item is visible', () => {
      cy.get(cartPage.cartList.cartItem.removeButton).then(($removeButtons) => {
        const removeButtonCount = [...$removeButtons].length;
        cy.get(cartPage.cartList.inventoryItem).then(($items) => {
          const itemsCount = [...$items].length;
          expect(removeButtonCount).to.eq(itemsCount);
        });
      });
    });

    after(() => {
      cy.get(cartPage.cartList.cartItem.removeButton).click();
    });
  });
});
