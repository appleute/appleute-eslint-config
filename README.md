# Appleute ESLint Config

Shared ESLint configs for [appleute](https://github.com/appleute) projects.

| Stack     | Config                                     |
| --------- | ------------------------------------------ |
| (Default) | @appleute/eslint-config                    |
| Node      | @appleute/eslint-config/node               |
| React     | @appleute/eslint-config/react              |
| Next.js   | @appleute/eslint-config/next (Coming Soon) |
| Expo      | @appleute/eslint-config/expo (Coming Soon) |

## TODO

- Config for next.js, waiting for support to be added. See https://github.com/vercel/next.js/issues/64453
- Config for expo, waiting for support to be added. See https://github.com/expo/expo/blob/main/packages/eslint-config-expo/package.json
- Sort imports using eslint `sort-imports` or `eslint-plugin-import`

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
yarn add -D eslint@latest prettier@latest @appleute/eslint-config
```

This package already inclues eslint plugins and configs, so you can remove them if you have any installed.

### Configure ESLint

Create a `eslint.config.js` in your project root and import the desired config.

```js
const nodeConfig = require("@appleute/eslint-config/node");

/** @type import("eslint").Linter.Config[] */
module.exports = [...nodeConfig];
```

### Configure Prettier

Create a `.prettierrc.js` in your project root and import the prettier config.

#### .prettierrc.js

```js
const prettierRc = require("@appleute/eslint-config/.prettierrc.js");

/** @type import("prettier").Config */
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
# Add pinst ONLY if your package is not private
yarn add -D pinst
```

2\. Configure package.json

```json
{
  ...
  "scripts": {
    // Yarn doesn't support prepare script
    "postinstall": "husky",
    // Include this if publishing to npmjs.com
    "prepack": "pinst --disable",
    "postpack": "pinst --enable"
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
yarn husky
echo "npx lint-staged" > .husky/pre-commit
```

### VSCode Config

Configure your vscode to allow formatting on save, and use the typescript verison configured by the project instead of the vscode version.

Create `.vscode/settings.json` at the root of your repository.

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always"
  },
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

## Develop

### Publish

Use [npm version](https://docs.npmjs.com/cli/v7/commands/npm-version) to increment major, minor or patch version

Then publish using:

```sh
npm publish
```
