// =============================================
// Import Required Modules and Rule Definitions
// =============================================
const globals = require('globals');
const tsparser = require('@typescript-eslint/parser');

// =============================================
// Core rule sets
// =============================================
const jsrules = require('./eslint-config/rules/core/javascript.js');
const tsrules = require('./eslint-config/rules/core/typescript.js');
const importrules = require('./eslint-config/rules/core/import.js');

// =============================================
// Custom rules
// =============================================
const requireClassTypeProperty = require('./eslint-config/rules/typescript/require-class-type-property.js');
const restrictImport = require('./eslint-config/rules/typescript/restrict-import.js');

// =============================================
// Plugin Configuration
// =============================================
const plugins = {
  // Official plugins
  '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
  import: require('eslint-plugin-import'),
  prettier: require('eslint-plugin-prettier'),

  // Custom rules plugin
  'custom-rules': {
    rules: {
      'require-class-type-property': requireClassTypeProperty,
      'restrict-import': restrictImport,
    },
  },
};

// =============================================
// Main ESLint Configuration
// =============================================
module.exports = [
  {
    files: ['{src,apps,libs,test}/**/*.ts'],

    // Language and parsing options
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

    // Plugin settings
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },

    // Plugin registration
    plugins: {
      ...plugins,
    },

    // Rule definitions
    rules: {
      'prettier/prettier': 'error',

      // Imported rule sets
      ...jsrules,
      ...tsrules,
      ...importrules,

      // Custom rules
      'custom-rules/require-class-type-property': [
        'error',
        { propertyName: '_type' },
      ],
      'custom-rules/restrict-import': 'error',
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
