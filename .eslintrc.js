module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 0,
    'space-before-blocks': 0,
    'quote-props': 0,
    'no-unused-vars': 'off',
    'no-useless-return': 'off',
    'camelcase': [1, { 'properties': 'never' }]
  }
}
