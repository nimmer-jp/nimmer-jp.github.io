module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    project: ['.eslintrc.js', 'rollup.config.js', './tsconfig.json'],
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
  ],
  plugins: ['@typescript-eslint', 'svelte3'],
  ignorePatterns: ['public/build/'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  rules: {
    'no-var': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  settings: {
    // Nothing
  },
};
