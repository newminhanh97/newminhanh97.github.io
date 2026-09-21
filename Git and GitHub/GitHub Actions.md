---
sort: 4
tags: [github, automation, ci]
---

GitHub Actions runs automated jobs in response to events such as a push or pull request. A workflow is a YAML file stored in `.github/workflows/` in the repository.

## Add a build workflow

Create `.github/workflows/build.yml`:

```yaml
name: Build

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository
        uses: actions/checkout@v4
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
```

The `on` section chooses the events that start the workflow. A job runs on a hosted Ubuntu machine, and its steps check out the code, install dependencies, and run the project's build script. This example assumes `package.json` defines `build` and the repository has a committed `package-lock.json`; adjust the commands to match your project.

## View a workflow run

Push the workflow file to GitHub, then open the repository's **Actions** tab. Each run shows its triggering event, job steps, logs, and pass/fail result. For pull requests, checks can be required before merging in the repository's branch protection settings.

## Secrets and permissions

Store credentials in repository or organization **Actions secrets**, then expose only the specific secret needed by a step using the `secrets` context. Do not commit tokens, passwords, or private keys to workflow YAML or logs. Give the workflow only the permissions it needs, and pin third-party actions to a reviewed version.