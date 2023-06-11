/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-import',
    'prefer-arrow-functions',
    'prettier',
  ],
  root: true,
  rules: {
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['camelCase', 'PascalCase'],
        selector: 'default',
      },
      {
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        selector: ['variable', 'function', 'property'],
      },
      {
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        selector: 'parameter',
      },
      {
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'require',
        modifiers: ['private'],
        selector: 'memberLike',
      },
      {
        format: ['PascalCase'],
        selector: 'typeLike',
      },
    ],
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'only-multiline'],
    'import/extensions': 0,
    'import/no-default-export': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/no-unresolved': 'error',
    'import/prefer-default-export': 0,
    'jest/no-export': 'off',
    'jsx-a11y/label-has-associated-control': 0,
    'no-console': 1,
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-useless-constructor': 0,
    'object-curly-newline': 'off',
    'prefer-arrow-functions/prefer-arrow-functions': [
      'warn',
      {
        classPropertiesAllowed: false,
        disallowPrototype: false,
        returnStyle: 'unchanged',
        singleReturnOnly: false,
      },
    ],
    'prefer-destructuring': 1,
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        bracketSameLine: false,
        bracketSpacing: true,
        endOfLine: 'auto',
        jsxDoubleQuote: true,
        overrides: [
          {
            files: '*.md',
            options: {
              parser: 'markdown',
            },
          },
        ],
        printWidth: 80,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      // 'babel-module': {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
      typescript: {
        alwaysTryTypes: true,
        // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        project: ['./tsconfig.json'],
      },
    },
    jest: {
      version: 28,
    },
  },
};
