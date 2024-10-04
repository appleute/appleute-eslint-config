const defaultConfig = require("./default");
const globals = require("globals");

/** @type import("eslint").Linter.Config[] */
module.exports = [
  ...defaultConfig,

  // common configuration
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
