# Cypress_JS_TAF

This repository contains a Cypress-based Test Automation Framework (TAF).

## Related Documents

-   **[VS Code Hotkeys](./docs/hotkeys.md)** - Useful keyboard shortcuts for VS Code on Mac.
-   **[Git Strategy](./docs/git-strategy.md)** - Git workflow strategy.

## Prerequisites

Before running tests, ensure you have the following installed:

-   **Node.js** (Download: [https://nodejs.org/](https://nodejs.org/))
-   **Cypress** (Install with: `npm install cypress --save-dev`)

## How to Run Tests

### Common Mode

npx cypress run **OR** npm run test

### Debug Mode (Run with GUI and Debugging Tools)

npx cypress open **OR** npm run open

### Headless Mode (Specify Browser and Run in Terminal)

npx cypress run --browser chrome

### Run Tests in a Specific Mode (Headed or Headless)

npx cypress run --headed **OR** npm run test-headed
npx cypress run --headless **OR** npm run test-headless
