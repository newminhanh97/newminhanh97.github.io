---
sort: 2
tags: [git, version-control]
---

Git tracks changes in a project over time. A repository contains your files and their saved history. A commit is a named snapshot of selected changes.

## Start tracking a project

Run these commands from the project directory:

```bash
git init
git status
git add README.md
git commit -m "Add project README"
```

`git status` shows what has changed. `git add` stages changes for the next commit; it does not upload them. `git commit` records the staged changes locally. To stage all current changes, use `git add .` after checking `git status`.

Set the author name and email Git records on your commits:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## Inspect history and changes

```bash
git status
git diff
git log --oneline
```

Use `git diff` before staging to review unstaged edits. After staging, `git diff --staged` shows what will be committed.

## Work on a branch

A branch lets you make a change without changing the main line of work:

```bash
git switch -c add-search
# edit files, then stage and commit them
git add .
git commit -m "Add search"
git switch main
git merge add-search
```

When a branch is no longer needed, delete it after it has been merged with `git branch -d add-search`.

## Connect to a remote

For a repository hosted on GitHub, add its URL as a remote and exchange commits:

```bash
git remote add origin https://github.com/OWNER/REPOSITORY.git
git push -u origin main
git pull
```

`git push` sends local commits to the remote. `git pull` fetches remote commits and integrates them into the current branch. If a remote named `origin` is already configured, inspect it with `git remote -v` instead of adding it again.