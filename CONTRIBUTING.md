# Contribution Guide

🎉🚀💖 First off, thanks for taking the time to contribute! 💖🚀🎉
It's people like you that make Open Source so great.

---

## Your first time contributing?

Here are a couple of friendly tutorials to help you get started: http://makeapullrequest.com/ and http://www.firsttimersonly.com/

> Working on your first Pull Request? You can learn how from this _free_ series, [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).

At this point, you're ready to make your changes! Feel free to ask for help; everyone is a beginner at first :smile_cat:

---

## Getting started

### Run it locally

1. Install [Docker](https://docs.docker.com/install/) & make sure it's running.
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