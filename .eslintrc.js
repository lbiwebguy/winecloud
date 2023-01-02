module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  ignorePatterns: [
    'build/',
    '.gradle/',
    '.yalc/',
    'node_modules/',
    'ios/',
    'android/',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    '@react-native-community',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      rules: {
        '@typescript-eslint/no-non-null-assertion': 0,
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {},
};
