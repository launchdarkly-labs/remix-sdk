module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['@typescript-eslint', 'prettier', 'simple-import-sort'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    // avoid false positives for vars used only in types, and replace with ts version where possible
    'no-unused-vars': ['off'],
    'no-undef': ['off'],
    // avoid false positives for optional chaining
    'no-unused-expressions': 'off',
    // don't require proptypes for typescript files because we have types
    'react/prop-types': ['off'],
    // rely on @typescript-eslint/require-await instead
    'require-await': 'off',
    // replaced by @typescript-eslint/no-shadow
    'no-shadow': 'off',
    // replaced by @typescript-eslint/naming-convention
    camelcase: 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/typedef': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    // disable the need for explicit return types for all functions
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: true,
      },
    ],
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/no-parameter-properties': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple',
      },
    ],
    '@typescript-eslint/no-extraneous-class': [
      'error',
      {
        allowEmpty: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    // TODO: The following rules can be enabled or improved but will require significant changes to do so
    'no-use-before-define': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          'React.FunctionComponent': {
            message: 'Add argument and return type instead.',
          },
          FunctionComponent: {
            message: 'Add argument and return type instead.',
          },
          'React.PropsWithChildren': {
            message: 'Be explicit in your (prop) type instead',
          },
          PropsWithChildren: {
            message: 'Be explicit in your (prop) type instead',
          },
          // disable default object typing bans
          Object: false,
          '{}': false,
          object: false,
        },
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase'],
        filter: {
          regex: '.*(PropType)$',
          match: true,
        },
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'parameter',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      }, // the notifications reducer uses action types such as `teams/DELETE_TEAM_DONE` as object properties
      {
        selector: 'objectLiteralMethod',
        format: null,
        filter: {
          regex: '^[a-z][a-zA-Z]*(/|.)[A-Z_]*$',
          match: true,
        },
      },
      {
        selector: 'objectLiteralProperty',
        format: null,
        filter: {
          regex: '^(__esModule|[a-z][a-zA-Z]*/[A-Z_]*)$',
          match: true,
        },
      },
      {
        selector: 'memberLike',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase', 'camelCase'],
      },
      {
        selector: [
          'classProperty',
          'objectLiteralProperty',
          'typeProperty',
          'classMethod',
          'objectLiteralMethod',
          'typeMethod',
          'accessor',
          'enumMember',
        ],
        format: null,
        modifiers: ['requiresQuotes'],
      },
    ],
  },
};
