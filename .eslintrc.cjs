module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  root: true,
  ignorePatterns: ['vite.config.ts', '.eslintrc.cjs', 'tailwind.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: true,
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'react/require-default-props': 'off',
    'import/default': 'off',
    'import/prefer-default-export': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        '': 'never',
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '@/**/**',
            group: 'parent',
            position: 'before',
          },
        ],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
