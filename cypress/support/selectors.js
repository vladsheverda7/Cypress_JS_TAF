const loginPage = {
  userNameInputField: '[data-test="username"]',
  passwordInputField: '[data-test="password"]',
  loginButton: '[data-test="login-button"]',
  errorMessage: '[data-test="error"]',
};

const inventoryPage = {
  inventoryList: '[data-test="inventory-list"]',
  inventoryItem: {
    name: '[data-test="inventory-item-name"]',
    description: '[data-test="inventory-item-desc"]',
    price: '[data-test="inventory-item-price"]',
  },
  addToCart: (productKey) => `[data-test="add-to-cart-sauce-labs-${productKey}"]`,
  removeFromCart: (productKey) => `[data-test="remove-sauce-labs-${productKey}"]`,
};

const headerComponent = {
  title: '.app_logo',
  sidebar: {
    burgerMenu: '.bm-burger-button button',
    logout: '[data-test="logout-sidebar-link"]',
  },
  shoppingCartIconBadge: '[data-test="shopping-cart-badge"]',
  cartButton: '[data-test="shopping-cart-link"]',

  secondaryHeader: {
    productLabel: '[data-test="title"]',
    sortContainer: {
      productSortContainer: '[data-test="product-sort-container"]',
      defaultSorting: '[data-test="active-option"]',
    },
  },
};

const cartPage = {
  title: '[data-test="title"]',
  cartList: {
    qtyLabel: '[data-test="cart-quantity-label"]',
    descriptionLabel: '[data-test="cart-desc-label"]',
  },
  continueShoppingButton: '[data-test="continue-shopping"]',
  checkoutButton: '#checkout',
};

export default {
  loginPage,
  inventoryPage,
  headerComponent,
  cartPage,
};
