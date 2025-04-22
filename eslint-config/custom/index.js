const convention = {
  plugin: {
    'convention-rule': {
      rules: {
        'require-class-type-property': require('./convention/require-class-type-property.js'),
        'restrict-import': require('./convention/restrict-import.js'),
      },
    },
  },
  rules: {
    'convention-rule/require-class-type-property': [
      'error',
      { propertyName: '_type' },
    ],
    'convention-rule/restrict-import': 'error',
  },
};

module.exports = {
  plugin: {
    ...convention.plugin,
  },
  rules: {
    ...convention.rules,
  },
};
