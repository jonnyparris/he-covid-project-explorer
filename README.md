# [Helpful Engineering](https://www.helpfulengineering.org/) COVID-19 Project Explorer UI

See [project proposal here](https://github.com/Helpful-Engineers/resources/blob/master/software/proposals/navigate-by-problems.md) for inspiration and motivation details.

[![JS Intl Kitchen Sink is released under the MIT license.](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![PRs welcome!](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Netlify Status](https://api.netlify.com/api/v1/badges/86e24ae7-2036-4abd-84fd-5b7bc702b7c1/deploy-status)](https://app.netlify.com/sites/he-project-discovery/deploys)

## Contribution Guide

### Run it locally

1. Install docker & make sure it's running.
2. `make start` (see notes below if using MacOS and stuck at this step)
3. Open [http://localhost:7000/](http://localhost:7000/)

> **Notes / Troubleshooting:**

> - `make help` (or just `make`) will list other available make tasks
> - Mac users that don't already have xcode commandline tools installed may need to run `xcode-select --install` in order to run `make` commands. Othwerwise you might encounter an error that looks something like `xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools)` when you try to run `make start`

### About the stack

This is built using [Nuxt](https://github.com/nuxt/nuxt.js) & Typescript.
Nuxt generates a static site for production.

### Added modules & presets

- Nuxt auth module, already setup with a basic local auth strategy
- Nuxt i18n for multi-lingual support
- vue-cookieconsent-component for cookie banner
- vue recaptcha for signup request throttling
- MirageJS for mock server api responses
- Linting enforced on as a precommit hook using the pre-commit package

### Tips

- Run `npm install` on your machine at leat once, so the `pre-commit` lint hook is installed.
- Include screencaptures in any merge requests that involve updating the UI to save review time. ([Gyazo](https://gyazo.com/) is good for capturing animations easily)
- Ensure do-it-later (aka do-it-friday) comments are prefixed with capitalised "TODO" as a convention so it's easy to highlight and find them all
- [Vue i18n Ally](https://marketplace.visualstudio.com/items?itemName=antfu.vue-i18n-ally) is an invaluable vscode extension for reducing i18n effort if needed.
- You'll need to rebuild your dev instance with `make start` if you add new source folders that are required in the build (e.g. "layouts")
