const convention = {
  plugin: {
    'convention-rule': {
      rules: {
        'require-class-type-property': require('./convention/require-class-type-property.js'),
        'restrict-import': require('./convention/restrict-import.js'),
        'restrict-export': require('./convention/restrict-export.js'),
        'require-kebab-case-base-filename': require('./convention/require-kebab-case-base-filename.js'),
        'restrict-name-suffix': require('./convention/restrict-name-suffix.js'),
      },
    },
  },
  rules: {
    'convention-rule/require-class-type-property': [
      'error',
      { propertyName: '_type' },
    ],
    'convention-rule/restrict-export': 'error',
    'convention-rule/restrict-import': 'error',
    'convention-rule/require-kebab-case-base-filename': 'error',
    'convention-rule/restrict-name-suffix': 'error',
  },
};

module.exports = {
  plugin: {
    ...convention.plugin
  },
  rules: {
    ...convention.rules
  },
};
