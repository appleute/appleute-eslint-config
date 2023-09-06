module.exports = {
  extends: ["universe/web", "universe/shared/typescript-analysis", "next", "prettier"],
  env: {
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["unused-imports"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
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
    "./next",
    "/out",
  ],
  rules: {
    // we can't use next image component in static builds
    "@next/next/no-img-element": "off",

    // use react hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

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
};
