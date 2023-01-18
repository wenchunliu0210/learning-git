module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  // extends: 'eslint:recommended',
  extends: 'standard',
  overrides: [
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false
  },
  rules: {
    'generator-star-spacing': 'off'
  }
}
