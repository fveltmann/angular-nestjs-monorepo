// @ts-check
import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const typeCheckedRules = {
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-floating-promises': 'warn',
  '@typescript-eslint/no-unsafe-argument': 'warn',
  'prettier/prettier': ['error', { endOfLine: 'auto' }],
};

export default defineConfig(
  {
    ignores: [
      'eslint.config.mjs',
      'dist/**',
      'out-tsc/**',
      '.angular/**',
      '.cache/**',
      'coverage/**',
      '**/*.d.ts',
    ],
  },
  eslintPluginPrettierRecommended,
  {
    files: ['frontend/**/*.ts'],
    ignores: ['frontend/**/*.spec.ts'],
    extends: [eslint.configs.recommended, ...tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        project: './tsconfig.app.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: typeCheckedRules,
  },
  {
    files: ['frontend/**/*.spec.ts'],
    extends: [eslint.configs.recommended, ...tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        project: './tsconfig.spec.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: typeCheckedRules,
  },
  {
    files: ['backend/**/*.ts'],
    ignores: ['backend/**/*.spec.ts'],
    extends: [eslint.configs.recommended, ...tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      globals: globals.node,
      sourceType: 'commonjs',
      parserOptions: {
        project: './backend/tsconfig.build.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: typeCheckedRules,
  },
  {
    files: ['backend/**/*.spec.ts'],
    extends: [eslint.configs.recommended, ...tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      globals: globals.node,
      sourceType: 'commonjs',
      parserOptions: {
        project: './backend/tsconfig.spec.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: typeCheckedRules,
  },
);
