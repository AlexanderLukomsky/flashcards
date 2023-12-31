module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'plugin:react/recommended',
    'prettier',
    'airbnb',
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    semi: 'off',
    '@typescript-eslint/semi': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }], // should add ".ts" if typescript project
    'react/display-name': 1,
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'no-console': 1,
    'react/function-component-definition': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-restricted-syntax': 'off',
    'no-use-before-define': 'off',
    'react/require-default-props': 'off',
    'no-shadow': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'none', ignoreRestSiblings: true },
    ],
    'linebreak-style': 0,
    'import/no-cycle': 'off',
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    indent: 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-curly-newline': 'off',
    'operator-linebreak': 'off',
    'no-confusing-arrow': 'off',
    'function-paren-newline': 'off',
    'newline-per-chained-call': 'off',
    'class-methods-use-this': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    'no-param-reassign': 'off',
    'react/prop-types': 'off',
    'react/no-unknown-property': [
      2,
      {
        ignore: ['jsx'],
      },
    ],
  },
};
