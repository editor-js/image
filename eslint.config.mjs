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
        'jsdoc/require-jsdoc': ['off'],
        '@typescript-eslint/no-unsafe-assignment': ['off'],
        '@typescript-eslint/no-unsafe-member-access': ['off'],
        '@typescript-eslint/no-explicit-any': ['off'],
        "@typescript-eslint/naming-convention": [
          "error",
          {
            "selector": "variable",
            "format": ["camelCase"],
            "leadingUnderscore": "allow"
          },
        ],
        "@typescript-eslint/ban-types": ["error",
            {
                "types": {
                    "String": true,
                    "Boolean": true,
                    "Number": true,
                    "Symbol": true,
                    "{}": false,
                    "Object": true,
                    "object": false,
                    "Function": false,
                },
                "extendDefaults": true
            }
        ]
    }
  },
  {
    ignores: ['dev/**', 'eslint.config.mjs', 'vite.config.js', 'postcss.config.js']
  }
];
