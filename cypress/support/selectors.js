const loginPage = {
  userNameInputField: '[data-test="username"]',
  passwordInputField: '[data-test="password"]',
  loginButton: '[data-test="login-button"]',
  errorMessage: '[data-test="error"]',
};

const inventoryPage = {
  inventoryList: '[data-test="inventory-list"]',
};

const headerComponent = {
  sidebar: {
    burgerMenu: '.bm-burger-button button',
    logout: '[data-test="logout-sidebar-link"]',
  },
};

export default {
  loginPage,
  inventoryPage,
  headerComponent,
};
