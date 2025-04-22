const javascriptRule = require('./conventions/javascript.js');
const typescriptRule = require('./conventions/typescript.js');
const importRules = require('./conventions/import.js');

const conventions = {
  rules: {
    ...javascriptRule,
    ...typescriptRule,
    ...importRules,
  },
};

module.exports = {
  rules: {
    ...conventions.rules,
  },
};
