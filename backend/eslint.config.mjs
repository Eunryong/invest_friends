import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';

export default tseslint.config(
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: { prettier },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      'prettier/prettier': ['error'],
      'comma-spacing': ['error', { before: false, after: true }],
      'max-len': ['error', { code: 150 }],
      'quotes': ['error', 'single'],
      'no-console': ['warn'],
      'no-debugger': ['warn'],
      'semi': ['error', 'always'],
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: [
            'public-static-method',
            'protected-static-method',
            'public-instance-method',
            'protected-instance-method',
            'private-instance-method',
          ],
        },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      'no-empty-function': ['error', { allow: ['arrowFunctions'] }],
      '@typescript-eslint/no-inferrable-types': 'off',
    },
  },
  {
    plugins: { prettier },
    rules: {
      'prettier/prettier': 'error',
    },
  },
);
