import Codex from "eslint-config-codex";
import { plugin as TsPlugin, parser as TsParser } from "typescript-eslint";

export default [
  ...Codex,
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parser: TsParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: "./",
        sourceType: "module",
      },
    },
    rules: {
      "n/no-missing-import": ["off"],
      "n/no-unsupported-features/node-builtins": ["off"],
      "jsdoc/require-returns-description": ["off"],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "variable",
          format: ["camelCase"],
          leadingUnderscore: "allow",
        },
      ],
      "@typescript-eslint/ban-types": [
        "error",
        {
          types: {
            String: true,
            Boolean: true,
            Number: true,
            Symbol: true,
            "{}": false,
            Object: true,
            object: false,
            Function: false,
          },
          extendDefaults: true,
        },
      ],
    },
    quotes: "off",
  },
  {
    ignores: [
      "dev/**",
      "eslint.config.mjs",
      "vite.config.js",
      "postcss.config.js",
    ],
  },
];
