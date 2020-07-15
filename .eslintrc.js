module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: ["plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    semi: ["error", "always", { omitLastInOneLineBlock: true }],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "never",
        exports: "never",
      },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    quotes: [2, "double"],
    indent: ["error", 2],
  },
};
