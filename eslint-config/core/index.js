const javascriptRule = require('./conventions/javascript.js');
const typescriptRule = require('./conventions/typescript.js');
const importRules = require('./conventions/import.js');

module.exports = {
  rules: {
    ...javascriptRule,
    ...typescriptRule,
    ...importRules,
  },
};
