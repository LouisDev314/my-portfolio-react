module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    semi: ['error', 'always'],
    'no-unused-vars': 'error',
    'no-unused-expressions': 'error',
    quotes: ['error', 'single'],
    'no-multi-spaces': 'error',
    eqeqeq: 'error',
    complexity: ['error', 10],
    'prettier/prettier': ['off', { endOfLine: 'auto' }],
    'linebreak-style': ['error', 'unix'],
    'object-curly-spacing': ['error', 'always'],
    'eol-last': ['error', 'always'],
    'comma-dangle': [2, 'always-multiline'],
    'no-duplicate-imports': ['error', { includeExports: true }],
    '@typescript-eslint/no-explicit-any': ['error'],
  },
};
