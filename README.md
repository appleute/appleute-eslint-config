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

Import this config into your own ESLint configuration using the extends option. ESLint checks both package.json and .eslintrc.\* files for its configuration:

### package.json

```json
{
  "eslintConfig": {
    "extends": "@appleute/eslint-config/web"
  }
}
```

### .eslintrc.js

```js
module.exports = {
  extends: "@appleute/eslint-config/web",
};
```

### .prettierrc.js

```js
const prettierRc = requrire("@appleute/eslint-config/.prettierrc.js");

module.exports = {
  ...prettierRc,
};
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
