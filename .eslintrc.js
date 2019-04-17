module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-multiple-empty-lines': [0, { max: 2 }],
    'no-mixed-spaces-and-tabs': [2, false],
    'no-trailing-spaces': 2,
    indent: [2, 4],
    quotes: [1, 'single'],
    semi: [2, 'always']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
