# Rules

1. Naming Conventions: Follow the established naming convention.

- Use descriptive and readable names for files and test cases:
- ✅ it('adds item to cart when Add to Cart button is clicked')
- ❌ it('clicks the button')

2. Test Structure (describe, context, it)

- Use describe() to group a test suite (e.g., a feature or module).
- Use context() to describe different scenarios or states.
- Use it() for individual test cases that clearly describe expected behavior.

3. Test Independence

- Each test should be self-contained and independent.
- Do not rely on other tests’ execution order or shared state.
- Use beforeEach() to prepare test data and state if needed.
- Clean up after tests when necessary.

4. Avoid Hardcoded Values

- Do not hardcode values like usernames, passwords, or API tokens inside tests.

5. Avoid Unnecessary wait()

- Don’t use hardcoded delays like cy.wait(5000).

6. Clear Assertions

- Add meaningful assertions that confirm key behaviors.
- Don’t leave test steps unvalidated — every test should have at least one .should() or similar check.

7. Code Readability

- Keep tests short and readable.
- Use comments or cy.log() to clarify intent where necessary.
- Avoid copy-pasting — extract repeated logic into helpers or commands.
