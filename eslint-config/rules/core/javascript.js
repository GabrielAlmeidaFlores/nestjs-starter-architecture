module.exports = {
  'no-console': ['error', { allow: ['warn', 'error'] }],
  'no-debugger': 'error',
  'no-eval': 'error',
  'no-implied-eval': 'error',
  'no-shadow': 'error',
  'no-unused-expressions': 'error',
  'no-use-before-define': [
    'error',
    { functions: false, classes: true, variables: true },
  ],
  eqeqeq: ['error', 'always'],
  curly: ['error', 'all'],
  'prefer-const': 'error',
  'no-var': 'error',
};
