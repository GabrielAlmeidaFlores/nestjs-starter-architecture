module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Require that each file exports only one entity (except for entity overloads).',
      category: 'Best Practices',
    },
    fixable: null,
    schema: [],
    messages: {
      singleExport:
        'File should only export one entity, except for entity overloads.',
    },
  },
  create(context) {
    return {
      Program(node) {
        const exportDeclarations = node.body.filter(
          (n) =>
            n.type === 'ExportNamedDeclaration' ||
            n.type === 'ExportDefaultDeclaration',
        );

        const functionNames = new Set();
        const uniqueExports = new Set();

        for (const decl of exportDeclarations) {
          if (
            decl.declaration &&
            decl.declaration.type === 'FunctionDeclaration'
          ) {
            const name = decl.declaration.id?.name;

            if (name) {
              functionNames.add(name);
            }
          } else if (
            decl.declaration &&
            decl.declaration.type === 'VariableDeclaration'
          ) {
            const names = decl.declaration.declarations.map(
              (variable) => variable.id.name,
            );
            names.forEach((name) => uniqueExports.add(name));
          } else if (
            decl.declaration &&
            decl.declaration.type === 'TypeAlias'
          ) {
            uniqueExports.add(decl.declaration.id.name);
          } else if (decl.source) {
            uniqueExports.add(decl.source.value);
          }
        }

        const totalExports = functionNames.size + uniqueExports.size;

        if (totalExports > 1) {
          context.report({
            node,
            messageId: 'singleExport',
          });
        }
      },
    };
  },
};
