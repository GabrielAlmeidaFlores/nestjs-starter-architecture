module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Require interfaces to end with "Interface" and all type aliases to end with "Type"',
      category: 'Best Practices',
    },
    fixable: null,
    schema: [],
    messages: {
      interfaceSuffix: 'Interface name should end with "Interface".',
      typeSuffix: 'Type alias name should end with "Type".',
    },
  },
  create(context) {
    return {
      TSInterfaceDeclaration(node) {
        const name = node.id.name;
        if (!name.endsWith('Interface')) {
          context.report({
            node: node.id,
            messageId: 'interfaceSuffix',
          });
        }
      },
      TSTypeAliasDeclaration(node) {
        const name = node.id.name;

        if (!name.endsWith('Type')) {
          context.report({
            node: node.id,
            messageId: 'typeSuffix',
          });
        }
      },
    };
  },
};
