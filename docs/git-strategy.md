# Git Strategy for Cypress_JS_TAF

## Branching Strategy

We follow the Git Flow branching model to maintain a structured and efficient workflow.

## Main Branches:

**main**: Contains only stable, production-ready code.

**develop**: The active development branch where new features are merged before release.

**Supporting Branches**:

**Feature Branches (feature/branch-name)**: Used for developing new features or test cases.

## Workflow

1. Creating a New Feature Branch

git checkout develop
git pull origin develop
git checkout -b feature/new-test-case

2. Committing Changes

Follow the Conventional Commits format:

git commit -m "add new login test case"

3. Pushing and Creating a Merge Request

git push origin feature/new-test-case

Open a merge request (MR) to develop.

4. Review and Merge

Ensure tests pass before merging.

Use squash and merge to keep a clean history.

Delete the branch after merging.
