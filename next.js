const reactConfig = require("./react");
const eslintConfigPrettier = require("eslint-config-prettier");
const globals = require("globals");
const eslintrc = require("@eslint/eslintrc");
const compat = new eslintrc.FlatCompat();

// TODO: Test and publish config once next.js adds support for flat config
// see https://github.com/vercel/next.js/issues/64453

/** @type import("eslint").Linter.Config[] */
module.exports = [
  ...reactConfig,

  // next config
  // see https://nextjs.org/docs/app/building-your-application/configuring/eslint#eslint-config
  // see https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config
  ...compat.extends("next"),

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
    rules: {
      // we can't use next image component in static builds
      "@next/next/no-img-element": "off",
    },
  },
];
