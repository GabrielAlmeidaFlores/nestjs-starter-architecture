const requireClassTypePropertyRule = require('./conventions/require-class-type-property.js');
const restrictImportRule = require('./conventions/restrict-import.js');

module.exports = {
  plugin: {
    'custom-rules': {
      rules: {
        'require-class-type-property': requireClassTypePropertyRule,
        'restrict-import': restrictImportRule,
      },
    },
  },
  rules: {
    'custom-rules/require-class-type-property': [
      'error',
      { propertyName: '_type' },
    ],
    'custom-rules/restrict-import': 'error',
  },
};
