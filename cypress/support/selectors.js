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
  getNameList() {
    return cy
      .get(this.inventoryItem.name)
      .then(($els) => [...$els].map((el) => el.innerText.trim()));
  },
  getDescriptionList() {
    return cy
      .get(this.inventoryItem.description)
      .then(($els) => [...$els].map((el) => el.innerText.trim()));
  },
  getPriceList() {
    return cy
      .get(this.inventoryItem.price)
      .then(($els) => [...$els].map((el) => el.innerText.slice(1).trim()));
  },
};

const headerComponent = {
  title: '.app_logo',
  sidebar: {
    burgerMenu: '.bm-burger-button button',
    logout: '[data-test="logout-sidebar-link"]',
  },
  shoppingCartIcon: {
    shoppingCartBadge: '[data-test="shopping-cart-badge"]',
  },
  secondaryHeader: {
    productLabel: '[data-test="title"]',
    sortContainer: {
      productSortContainer: '[data-test="product-sort-container"]',
      defaultSorting: '[data-test="active-option"]',
      sortOptions: {
        az: '.product_sort_container option[value="az"]',
        za: '.product_sort_container option[value="za"]',
        lowToHigh: '.product_sort_container option[value="lohi"]',
        highToLow: '.product_sort_container option[value="hilo"]',
      },
    },
  },
};

export default {
  loginPage,
  inventoryPage,
  headerComponent,
};
