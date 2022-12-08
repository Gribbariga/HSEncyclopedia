// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "next",
    "next/core-web-vitals",
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier", "@typescript-eslint"],
  rules: {
    "prettier/prettier": "error",
    //
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "off",
    //
    "for-direction": "error",
    "no-dupe-keys": "error",
    "no-duplicate-imports": "error",
    "no-duplicate-case": "error",
    //
    "no-ex-assign": "warn",
  },
};
