1. Test File Naming

- Use the format: feature-name.cy.js
- Use lowercase and hyphen-separated words.
- File names should reflect the tested functionality.

Examples:

- login.cy.js
- inventory.cy.js
- cart.cy.js
- checkout.cy.js

2. Test Case Naming (it())

- Use clear, behavior-driven phrasing.
- Format: it('should <expected behavior>')

Examples:

- it('should log in successfully with valid credentials')
- it('should display an error for invalid password')
- it('should add item to cart from inventory page')
- it('should complete checkout with valid user info')

3. Test Suite Naming (describe())

- Name the main feature being tested.
- Use sentence-case or feature-case.

Example:

- describe('Login Page')
- describe('Inventory Page')
- describe('Cart Functionality')
- describe('Checkout Process')

4. Scenario Naming (context())

- Use context blocks to define test states or edge cases.
- Begin with "When", "If", or a clear scenario condition.

Example:

- context('When user enters valid credentials')
- context('When user enters invalid username')
- context('If inventory has multiple items')
- context('When cart is empty')
