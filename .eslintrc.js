module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["xo", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "new-cap": "warn",
    "no-unused-vars": "warn",
  },
};
