---
sort: 3
tags: [github, collaboration]
---

A pull-request workflow keeps changes reviewable and lets automated checks run before work is merged.

## Typical workflow

1. Create or clone a repository and make sure its default branch is up to date.
2. Open an issue to describe a bug or proposed change when the project uses issues.
3. Create a branch for the change: `git switch -c fix-navigation`.
4. Make a focused change, inspect it with `git diff`, then commit it.
5. Push the branch: `git push -u origin fix-navigation`.
6. Open a pull request on GitHub from that branch into the default branch.
7. Explain the change, link the related issue, respond to review, and fix any failing checks.
8. Merge the pull request using the repository's preferred merge method.

After merging, update your local default branch and remove the finished branch:

```bash
git switch main
git pull
git branch -d fix-navigation
```

## Issues and pull requests

Use an issue to discuss and track work. A pull request (PR) proposes a set of commits for review; it is also where reviewers leave comments and GitHub Actions reports check results. Keep PRs focused, describe how you tested the change, and treat review comments as part of the collaboration rather than as a separate process.

## Merge conflicts

A conflict means Git cannot automatically combine overlapping edits. Pull the latest target branch, resolve the marked sections in the affected files, and then stage and commit the resolution:

```bash
git fetch origin
git merge origin/main
# edit each conflicted file and remove the conflict markers
git add path/to/resolved-file
git commit
```

Check the final file carefully before committing. If the merge is in progress and you need to abandon it, `git merge --abort` returns to the state before the merge began.