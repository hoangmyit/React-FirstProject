module.exports = {
    extends: [
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      'plugin:jest/recommended',
      'prettier',
      'plugin:prettier/recommended',     
    ],
    plugins: ['react', '@typescript-eslint', 'jest'],
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
        tsx: true
      },
      ecmaVersion: 2018,
      sourceType: 'module',
      project: './tsconfig.json',
    },
    rules: {
      'linebreak-style': 'off',
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
      '@typescript-eslint/no-unsafe-assignment': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-unused-expressions': 0,
      '@typescript-eslint/no-unused-vars': 1,
      '@typescript-eslint/no-unsafe-member-access': 0,
      '@typescript-eslint/no-unsafe-call': 0,
      '@typescript-eslint/no-unsafe-return': 0,
      '@typescript-eslint/restrict-plus-operands': 0,
      '@typescript-eslint/restrict-template-expressions': 0,
      '@typescript-eslint/explicit-module-boundary-types': 0,
      'react-hooks/exhaustive-deps': 0,
      'react/prop-types': 0,
      'react/display-name': 0,
      'react/no-unknown-property': 0,
    },
  };
  