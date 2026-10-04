import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import { flatConfigs } from "eslint-plugin-import-x";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  js.configs.recommended,
  flatConfigs.recommended,

  {
    languageOptions: {
      globals: { ...globals.browser },
    },
  },
  eslintConfigPrettier,
]);
