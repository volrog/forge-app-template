import eslint from '@eslint/js';
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  reactPlugin.configs.flat.recommended,
  reactHooksPlugin.configs['recommended-latest'],
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
      globals: globals.browser,
    },
  },
]);
