import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import { flatConfigs } from "eslint-plugin-import-x";
import eslintConfigPrettier from "eslint-config-prettier";
import { createNextImportResolver } from "eslint-import-resolver-next";

export default defineConfig([
  js.configs.recommended,
  flatConfigs.recommended,

  {
    languageOptions: {
      globals: { ...globals.browser },
    },
    settings: {
      "import-x/resolver-next": [
        createNextImportResolver({
          alias: {
            "@": "./src",
          },
        }),
      ],
    },
  },
  eslintConfigPrettier,
]);
