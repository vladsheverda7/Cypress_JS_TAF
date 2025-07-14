describe('InventoryPage: Given Inventory page is opened', { testIsolation: false }, () => {
  context('InventoryPage: When inventory page is loaded', () => {
    before(() => {
      cy.visit('/');
      cy.login(users.standard_user.username, users.standard_user.password);
    });
    it('InventoryPage: Then the user can see page title', () => {
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

    it('InventoryPage: Then the user can see product names', () => {
      const expectedNames = products.map((product) => product.name);
      inventoryPage.getNameList().should('deep.equal', expectedNames);
    });

    it('InventoryPage: Then the user can see product description', () => {
      const expectedDescriptions = products.map((product) => product.description);
      inventoryPage.getDescriptionList().should('deep.equal', expectedDescriptions);
    });

    it('InventoryPage: Then the user can see product prices', () => {
      const expectedPrices = products.map((product) => product.price);
      inventoryPage.getPriceList().should('deep.equal', expectedPrices);
    });

    it('InventoryPage: Then the user can not see cart icon bage', () => {
      cy.get(headerComponent.shoppingCartIconBadge).should('not.exist');
    });
  });

  context('InventoryPage: When the user adds/removes backpack to cart', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.login(users.standard_user.username, users.standard_user.password);
      cy.get(inventoryPage.addToCart('backpack')).click();
    });

    it('InventoryPage: Then shopping cart icon badge icon equals 1', () => {
      cy.get(headerComponent.shoppingCartIconBadge).should('have.text', 1);
      cy.get(inventoryPage.removeFromCart('backpack')).click();
    });

    it('InventoryPage: Then shopping cart icon is not displayed', () => {
      cy.get(inventoryPage.removeFromCart('backpack')).click();
      cy.get(headerComponent.shoppingCartIconBadge).should('not.exist');
    });
  });

  context('InventoryPage: When the user changes sorting', () => {
    before(() => {
      cy.visit('/');
      cy.login(users.standard_user.username, users.standard_user.password);
    });
    it('InventoryPage: Product list is sorted in Z-A order', () => {
      cy.get(headerComponent.secondaryHeader.sortContainer.productSortContainer).select('za');
      const expectedNameList = products.map((product) => product.name);
      inventoryPage.getNameList().should('deep.equal', expectedNameList.reverse());
    });

    it('InventoryPage: Product list is sorted in A-Z order', () => {
      cy.get(headerComponent.secondaryHeader.sortContainer.productSortContainer).select('az');
      const expectedNameList = products.map((product) => product.name);
      inventoryPage.getNameList().should('deep.equal', expectedNameList.sort());
    });

    it('InventoryPage: Product list is sorted in Low to High order', () => {
      cy.get(headerComponent.secondaryHeader.sortContainer.productSortContainer).select('lohi');
      const expectedPriceList = products.map((product) => product.price);
      inventoryPage.getPriceList().should('deep.equal', sortPriceLoHi(expectedPriceList));
    });

    it('InventoryPage: Product list is sorted in High to Low order', () => {
      cy.get(headerComponent.secondaryHeader.sortContainer.productSortContainer).select('hilo');
      const expectedPriceList = products.map((product) => product.price);
      inventoryPage.getPriceList().should('deep.equal', sortPriceHiLo(expectedPriceList));
    });
  });
});
