# Git Strategy for Cypress_JS_TAF

## Branching Strategy

We follow the Git Flow branching model to maintain a structured and efficient workflow.

## Main Branches:

**main**: Contains only stable, production-ready code.

**develop**: The active development branch where new features are merged before release.

**Supporting Branches**:

**Feature Branches (feature/branch-name)**: Used for developing new features or test cases.

**Bugfix Branches (bugfix/branch-name)**: Used for fixing non-critical bugs found in develop.

**Hotfix Branches (hotfix/branch-name)**: Used for critical fixes that need to be applied to main immediately.

**Release Branches (release/version-number)**: Used to prepare a new release, allowing final bug fixes and documentation updates.

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

5. Releasing a New Version

Create a release/version-number branch.

Perform final testing and bug fixes.

Merge into main and tag the release.

git checkout main
git merge release/1.0.0
git tag v1.0.0
git push origin v1.0.0
