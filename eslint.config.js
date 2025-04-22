// =============================================
// Import Required Modules and Rule Definitions
// =============================================
const globals = require('globals');
const tsparser = require('@typescript-eslint/parser');

// =============================================
// Rules
// =============================================
const coreConfig = require('./eslint-config/core/index.js');
const customConfig = require('./eslint-config/custom/index.js');

// =============================================
// Plugin Configuration
// =============================================
const plugins = {
  '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
  import: require('eslint-plugin-import'),
  prettier: require('eslint-plugin-prettier'),
  ...customConfig.plugin,
};

// =============================================
// Main ESLint Configuration
// =============================================
module.exports = [
  {
    files: ['{src,apps,libs,test}/**/*.ts'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsparser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
    plugins,
    rules: {
      'prettier/prettier': 'error',
      ...coreConfig.rules,
      ...customConfig.rules,
    },
  },

  // ===========================================
  // Extended Rules from Plugin Recommendations
  // ===========================================
  {
    files: ['{src,apps,libs,test}/**/*.ts'],
    rules: {
      // TypeScript ESLint recommended rules
      ...plugins['@typescript-eslint'].configs.recommended.rules,
      ...plugins['@typescript-eslint'].configs[
        'recommended-requiring-type-checking'
      ].rules,
      ...plugins['@typescript-eslint'].configs.strict.rules,

      // Import plugin recommended rules
      ...plugins.import.configs.recommended.rules,
      ...plugins.import.configs.typescript.rules,
    },
  },
];
