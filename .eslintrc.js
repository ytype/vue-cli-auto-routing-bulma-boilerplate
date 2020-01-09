module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: [
    "html",
  ],
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "indent": [
      "error",
      4
    ],
    semi: [2, 'never'],
    "no-unused-vars": "off"
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
}