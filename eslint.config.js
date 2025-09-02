import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      // Change no-unused-vars from "error" ➝ "warn"
      "no-unused-vars": "warn",
    },
  },
  pluginReact.configs.flat.recommended,
]);
