module.exports = {
  root: true,
  env: {
    node: true,
    // browser: true,
    // es6: true,
    // commonjs: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    // "standard"
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  // plugins: [
  //   "html"
  // ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 解决驼峰命名
    "rules": {
      "camelcase": ["error", { "allow": ["aa_bb"] }],
      // "indent": [2, 4],
      // // allow paren-less arrow functions
      // "arrow-parens": 0,
      // // allow async-await
      // "generator-star-spacing": 0,
      // // allow space-before-function-paren
      // "space-before-function-paren": 0,
      // // allow debugger during development
      // "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0
    }
  }

}
