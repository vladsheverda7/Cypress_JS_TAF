describe('InventoryPage: Given Inventory page is opened', { testIsolation: false }, () => {
  const expectedNames = products.map((p) => p.name);
  const expectedDescriptions = products.map((p) => p.description);
  const expectedPrices = products.map((p) => p.price.toString());

  before(() => {
    cy.visit('/');
    cy.login(users.standard_user.username, users.standard_user.password);
  });

  context('InventoryPage: When inventory page is loaded', () => {
    it('InventoryPage: Then user can see page title', () => {
      cy.get(headerComponent.title).should('be.visible').and('have.text', l10n.header.title);
    });

    it('InventoryPage: Then the user can see product label', () => {
      cy.get(headerComponent.secondaryHeader.productLabel)
        .should('be.visible')
        .and('have.text', l10n.header.secondaryHeader.title);
    });

    it('InventoryPage: Then the user can see sorting button', () => {
      cy.get(headerComponent.secondaryHeader.sortContainer.defaultSorting).should(
        'have.text',
        l10n.header.secondaryHeader.sortContainer
      );
    });

    it('InventoryPage: Then user can see product names', () => {
      const actualNamesList = cy
        .get(inventoryPage.inventoryItem.name)
        .then(($els) => [...$els].map((el) => el.innerText.trim()));
      actualNamesList.should('deep.equal', expectedNames);
    });

    it('InventoryPage: Then user can see product description', () => {
      const actualDescriptionList = cy
        .get(inventoryPage.inventoryItem.description)
        .then(($els) => [...$els].map((el) => el.innerText.trim()));

      actualDescriptionList.should('deep.equal', expectedDescriptions);
    });

    it('InventoryPage: Then user can see product prices', () => {
      const actualPriceList = cy
        .get(inventoryPage.inventoryItem.price)
        .then(($els) => [...$els].map((el) => el.innerText.replace('$', '').trim()));

      actualPriceList.should('deep.equal', expectedPrices);
    });

    it('InventoryPage: Then the user can not see cart icon bage', () => {
      cy.get(headerComponent.shoppingCartIconBadge).should('not.exist');
    });
  });

  context('InventoryPage: When user clicks add to cart button', () => {
    before(() => {
      cy.get(inventoryPage.addToCart('backpack')).click();
    });

    it('InventoryPage: Then shopping cart icon badge icon equals 1', () => {
      cy.get(headerComponent.shoppingCartIconBadge).should('have.text', 1);
    });
    after(() => {
      cy.get(inventoryPage.removeFromCart('backpack')).click();
    });
  });

  context('InventoryPage: When user clicks remove button', () => {
    before(() => {
      cy.get(inventoryPage.addToCart('backpack')).click();
      cy.get(inventoryPage.removeFromCart('backpack')).click();
    });
    it('InventoryPage: Then shopping cart icon is not displayed', () => {
      cy.get(headerComponent.shoppingCartIconBadge).should('not.exist');
    });
  });

  context('InventoryPage: When the user change sorting by name from az to za', () => {
    before(() => {
      cy.get(headerComponent.secondaryHeader.sortContainer.productSortContainer).select('za');
    });
    it('InventoryPage: Then product list is sorted in Z-A order', () => {
      const actualSortedNamesList = cy
        .get(inventoryPage.inventoryItem.name)
        .then(($els) => [...$els].map((el) => el.innerText.trim()));

      actualSortedNamesList.should('deep.equal', expectedNames.reverse());
    });
  });

  context('InventoryPage: When the user change sorting by name from za to az', () => {
    before(() => {
      cy.get(headerComponent.secondaryHeader.sortContainer.productSortContainer).select('az');
    });

    it('InventoryPage: Then product list is sorted in A-Z order', () => {
      const actualSortedNamesList = cy
        .get(inventoryPage.inventoryItem.name)
        .then(($els) => [...$els].map((el) => el.innerText.trim()));

      actualSortedNamesList.should('deep.equal', expectedNames.sort());
    });
  });

  context('InventoryPage: When the user change sorting by price from Low to High order', () => {
    before(() => {
      cy.get(headerComponent.secondaryHeader.sortContainer.productSortContainer).select('lohi');
    });
    it('InventoryPage: Then product list is sorted in Low to High order', () => {
      const actualPriceList = cy
        .get(inventoryPage.inventoryItem.price)
        .then(($els) => [...$els].map((el) => el.innerText.replace('$', '').trim()));

      actualPriceList.should('deep.equal', sortPriceLoHi(expectedPrices));
    });
  });

  context('InventoryPage: When the user change sorting by price from High to Low order', () => {
    before(() => {
      cy.get(headerComponent.secondaryHeader.sortContainer.productSortContainer).select('hilo');
    });
    it('InventoryPage: Then product list is sorted in High to Low order', () => {
      const actualPriceList = cy
        .get(inventoryPage.inventoryItem.price)
        .then(($els) => [...$els].map((el) => el.innerText.replace('$', '').trim()));

      actualPriceList.should('deep.equal', sortPriceHiLo(expectedPrices));
    });
  });
});
