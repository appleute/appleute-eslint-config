# Appleute ESLint Config

Shared ESLint configs for Node, Web, React Native, and Expo projects.

| Stack        | Config                           |
| ------------ | -------------------------------- |
| Node         | @appleute/eslint-config/node     |
| React Native | @appleute/eslint-config/native   |
| Web          | @appleute/eslint-config/web      |
| Web (NextJS) | @appleute/eslint-config/web-next |

## Usage

### Configuration

#### New project

Install this package and peer dependencies

```sh
yarn add -D eslint prettier @appleute/eslint-config
```

#### Existing project

Install this package and update peer dependencies

```sh
yarn add -D eslint prettier@latest @appleute/eslint-config@latest
```

This package already inclues eslint plugins and configs, so you can remove them if you have them installed.

```sh
yarn remove @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-next eslint-config-universe eslint-plugin-unused-imports
```

### Configure ESLint

Import this config into your own ESLint configuration using the extends option. ESLint checks both package.json and .eslintrc.\* files for its configuration:

> There is no need to configure both package.json and .eslintrc.js, any one will do.

#### Either add this to `package.json`

```json
{
  "eslintConfig": {
    "extends": "@appleute/eslint-config/web"
  }
}
```

#### or create `.eslintrc.js` with the following lines

```js
module.exports = {
  extends: "@appleute/eslint-config/web",
};
```

### Configure Prettier

You can import the default prettier config used by the package into yours.

#### .prettierrc.js

```js
const prettierRc = require("@appleute/eslint-config/.prettierrc.js");

module.exports = {
  ...prettierRc,
};
```

#### .prettierignore

You can copy the `.prettierignore` file as is from the package.

```sh
cp node_modules/@appleute/eslint-config/.prettierignore .
```

### Commit hooks

Setup a pre-commit hook using husky and lint-staged to automatically lint and prettify before commit.

1\. Install husky and lint staged

```sh
yarn add -D husky lint-staged
```

2\. Configure package.json

```json
{
  ...
  "scripts": {
    ...
    "postinstall": "husky install"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "**/*": "prettier --write --ignore-unknown",
    "**/*.{js,ts,jsx,tsx}": "eslint --fix"
  },
}
```

3\. Add pre-commit hook

```sh
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
```

### Format on save

In VS Code, you can enable format on save by adding this config to the file `.vscode/settings.json` at the root of your repository.

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Develop

### Publish

Use [npm version](https://docs.npmjs.com/cli/v7/commands/npm-version) to increment major, minor or patch version

Then publish using:

```sh
npm publish
```
