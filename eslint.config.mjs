import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import globals from "globals";
import json from "@eslint/json";

export default defineConfig([
  {
    ignores: ["**/*.js", "**/*.cjs", "**/*.mjs"],
  },

  {
    files: ["**/*.json"],
    plugins: { json },
    languageOptions: { parser: json.parser },
    rules: json.configs.recommended.rules,
  },

  tseslint.configs.recommended,
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
      },
      sourceType: "module",
      ecmaVersion: "latest",
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.jest,
      },
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
    },
  },
]);
