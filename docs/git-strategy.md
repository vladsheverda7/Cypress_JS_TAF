# Git Strategy for Cypress_JS_TAF

## Branching Strategy

We follow the Git Flow branching model to maintain a structured and efficient workflow.

## Main Branches:

## Branching Model

-   **main** is the default branch and represents the latest production-ready code.
-   Feature work must be done in **feature branches** (e.g., `feature/login-page`).
-   Use descriptive branch names to clearly indicate the purpose of the branch.

**develop**: The active development branch where new features are merged before release.

**Supporting Branches**:

**Feature Branches (feature/branch-name)**: Used for developing new features or test cases.

## Workflow

1. Creating a New Feature Branch

git checkout develop
git pull origin develop
git checkout -b feature/new-test-case

2. Committing Changes

## Commit Rules

**Direct commits to `main` are prohibited**.

-   All changes must go through a **Pull Request (PR)**.
-   PRs must be reviewed and approved before being merged.
-   Branch protection rules are in place to enforce this.

Follow the Conventional Commits format:

git commit -m "add new login test case"

3. Pushing and Creating a Merge Request

git push origin feature/new-test-case

Open a merge request (MR) to develop.

4. Review and Merge

## Merge Strategy

Only **squash merges** are allowed.

-   This ensures a clean and linear commit history.
-   Each PR results in a single commit on the `main` branch.

**Merge commits** and **rebase merges** are disabled.

-   PR titles should clearly summarize the change.
-   Add a description of the changes made, and link to relevant issues if applicable.
-   Assign at least one reviewer.
-   Ensure all CI checks pass before merging.
-   Use squash merge when merging the PR.
