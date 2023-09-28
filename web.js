module.exports = {
  extends: ["universe/web", "universe/shared/typescript-analysis", "prettier"],
  env: {
    jest: true,
  },
  plugins: ["unused-imports"],
  ignorePatterns: [
    "/node_modules",
    "/package-lock.json",
    "/yarn.lock",
    "/.gen",
    "/.expo",
    "/.idea",
    "/assets",
    "/build",
    "/coverage",
    "/dist",
  ],
  rules: {
    // use react hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // use default import order and ignore empty lines
    "import/order": [
      "warn",
      {
        "newlines-between": "ignore",
      },
    ],

    // use plugin `unused-imports` instead of `no-unused-vars` rule to auto fix unused imports
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      parserOptions: {
        project: "./tsconfig.json",
      },
      rules: {
        // use strict type checking
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-unsafe-argument": "error",
        "@typescript-eslint/no-unsafe-assignment": "error",
        "@typescript-eslint/no-unsafe-call": "error",
        "@typescript-eslint/no-unsafe-declaration-merging": "error",
        "@typescript-eslint/no-unsafe-enum-comparison": "error",
        "@typescript-eslint/no-unsafe-member-access": "error",
        "@typescript-eslint/no-unsafe-return": "error",
      },
    },
  ],
};
