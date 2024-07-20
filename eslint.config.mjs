import Codex from "eslint-config-codex";
import { plugin as TsPlugin, parser as TsParser } from 'typescript-eslint';

export default [
  ...Codex,
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: TsParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: './',
        sourceType: 'module',
      },
    },
    rules: {
        'n/no-missing-import': ['off'],
        'n/no-unsupported-features/node-builtins': ['off'],
        'jsdoc/no-types': ['off'],
        'jsdoc/require-returns-description': ['off'],
        'jsdoc/check-tag-names': ['off'],
        '@typescript-eslint/no-unsafe-member-access': ['off'],
        "@typescript-eslint/naming-convention": [
          "error",
          {
            "selector": "variable",
            "format": ["camelCase"],
            "leadingUnderscore": "allow"
          },
        ]
    }
  },
  {
    ignores: ['dev/**', 'eslint.config.mjs', 'vite.config.js', 'postcss.config.js']
  }
];
