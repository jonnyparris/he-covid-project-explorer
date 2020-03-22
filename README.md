# [Helpful Engineering](https://www.helpfulengineering.org/) COVID-19 Project Explorer UI
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

See [project proposal here](https://github.com/Helpful-Engineers/resources/blob/master/software/proposals/navigate-by-problems.md) for inspiration and motivation details.

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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://www.mutter.co"><img src="https://avatars3.githubusercontent.com/u/9489658?v=4" width="100px;" alt=""/><br /><sub><b>Johannes Mutter</b></sub></a><br /><a href="#ideas-johannesmutter" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!