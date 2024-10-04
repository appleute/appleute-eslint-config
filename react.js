const defaultConfig = require("./default");
const eslintPluginReact = require("eslint-plugin-react");
const eslintConfigPrettier = require("eslint-config-prettier");
const globals = require("globals");
const eslintrc = require("@eslint/eslintrc");
const compat = new eslintrc.FlatCompat();

/** @type import("eslint").Linter.Config[] */
module.exports = [
  ...defaultConfig,

  // react plugin
  // see https://www.npmjs.com/package/eslint-plugin-react
  eslintPluginReact.configs.flat.recommended,
  eslintPluginReact.configs.flat["jsx-runtime"],

  // react hooks plugin
  // see https://www.npmjs.com/package/eslint-plugin-react-hooks
  // see https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config
  ...compat.extends("plugin:react-hooks/recommended"),

  // eslint prettier
  // see https://prettier.io/docs/en/integrating-with-linters.html
  eslintConfigPrettier,

  // common configuration
  {
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },

  // overrides for typescript source files
  {
    files: ["**/*.{ts,tsx,mtsx}"],
    rules: {
      // allow promise and promiselike to not have a catch
      "@typescript-eslint/no-floating-promises": "off",
    },
  },
];
