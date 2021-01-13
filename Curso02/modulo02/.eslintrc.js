module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off", // tira a obrigação de usar o this dentro da class
    "no-param-reassign": "off", // permite receber parametro e fazer alteraações nele
    camelcase: "off",
    "no-underscore-dangle": "off", // permite passa parametro com underline
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }], // permite criar variável, mesmo que nunca utilize
  },
};
