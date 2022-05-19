module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:vue/essential", "plugin:prettier/recommended"],
  parserOptions: {
    parser: "babel-eslint",
  },
  // eslint： https://eslint.org/docs/user-guide/configuring
  // "规则名": [规则值, 规则配置]
  // 关闭规则: "off"或者0
  // 在打开的规则作为警告（不影响退出代码）: "warn"或者1
  // 把规则作为一个错误（退出代码触发时为1）: "error"或者2
  rules: {
    "prettier/prettier": "warn",
    "arrow-parens": 0,
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": [
      "off",
      {
        ignorePattern: "^_",
      },
    ],
    avoidEscape: 0,
    "space-before-function-paren": 0,
    "generator-star-spacing": 0,
    semi: [0],
    indent: ["off", 2],
    "no-multi-spaces": "warn",
    "no-prototype-builtins": "warn",
    "no-undef": "warn",
    "prefer-const": 0,
    "key-spacing": [
      0,
      {
        singleLine: {
          beforeColon: false,
          afterColon: true,
        },
        multiLine: {
          beforeColon: true,
          afterColon: true,
          align: "colon",
        },
      },
    ],
  },
};