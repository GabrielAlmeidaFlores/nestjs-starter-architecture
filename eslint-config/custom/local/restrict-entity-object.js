const { AST_NODE_TYPES } = require('@typescript-eslint/utils');

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Enforce structure of Entity implementations',
      recommended: false,
    },
    messages: {
      readonlyPublic: 'Public property "{{name}}" must be marked as readonly.',
      invalidConstructor: 'Constructor must be private.',
      invalidMethod:
        'All methods must be public, and static methods (except create, getters, setters) must start with "is".',
      missingCreate: 'Missing required static method "create".',
      invalidCreateReturn:
        'The "create" method must return EitherType<..., ThisClass>.',
      mismatchedParameters:
        'Constructor and create method must have identical parameters.',
    },
    schema: [],
  },
  create(context) {
    return {
      ClassDeclaration(node) {
        const className = node.id?.name;
        if (!className) return;
        const superClass = node.superClass;
        const isBaseEntity =
          superClass &&
          ((superClass.type === AST_NODE_TYPES.Identifier &&
            superClass.name === 'BaseEntity') ||
            (superClass.type === AST_NODE_TYPES.MemberExpression &&
              superClass.property?.name === 'BaseEntity'));
        if (!isBaseEntity) return;
        let hasCreateMethod = false;
        let constructorParams = null;

        for (const element of node.body.body) {
          if (element.type === AST_NODE_TYPES.PropertyDefinition) {
            const isPublic =
              !element.accessibility || element.accessibility === 'public';
            const isReadonly = element.readonly === true;
            if (isPublic && !isReadonly) {
              context.report({
                node: element,
                messageId: 'readonlyPublic',
                data: { name: element.key.name },
              });
            }
          }
          if (element.type === AST_NODE_TYPES.MethodDefinition) {
            const methodName = element.key.name;
            const isStatic = element.static;
            const isGetter = element.kind === 'get';
            const isSetter = element.kind === 'set';
            const isPublic = element.accessibility === 'public';

            if (element.kind === 'constructor') {
              const isPrivate = element.accessibility === 'private';
              if (!isPrivate) {
                context.report({
                  node: element,
                  messageId: 'invalidConstructor',
                });
              }
              constructorParams = element.value.params;
              continue;
            }

            if (methodName === 'create') {
              hasCreateMethod = true;
              const createParams = element.value.params;
              if (constructorParams && createParams) {
                const areParamsEqual =
                  constructorParams.length === createParams.length &&
                  constructorParams.every((constructorParam, index) => {
                    const createParam = createParams[index];
                    const constructorParamName =
                      constructorParam.name?.name || constructorParam.name;
                    const createParamName =
                      createParam.name?.name || createParam.name;
                    if (constructorParamName !== createParamName) return false;
                    const constructorType =
                      constructorParam.typeAnnotation?.typeAnnotation?.typeName
                        ?.name;
                    const createType =
                      createParam.typeAnnotation?.typeAnnotation?.typeName
                        ?.name;
                    if (constructorType || createType) {
                      return constructorType === createType;
                    }
                    return true;
                  });
                if (!areParamsEqual) {
                  context.report({
                    node: element,
                    messageId: 'mismatchedParameters',
                  });
                }
              }
              const returnType = element.value.returnType?.typeAnnotation;
              if (
                returnType?.type === AST_NODE_TYPES.TSTypeReference &&
                ((returnType.typeName.type === AST_NODE_TYPES.Identifier &&
                  returnType.typeName.name === 'EitherType') ||
                  (returnType.typeName.type ===
                    AST_NODE_TYPES.TSQualifiedName &&
                    returnType.typeName.right.name === 'EitherType'))
              ) {
                const typeParams = returnType.typeParameters?.params;
                const secondParam = typeParams?.[1];
                let secondParamName = null;
                if (secondParam?.type === AST_NODE_TYPES.TSTypeReference) {
                  if (
                    secondParam.typeName?.type === AST_NODE_TYPES.Identifier
                  ) {
                    secondParamName = secondParam.typeName.name;
                  } else if (
                    secondParam.typeName?.type ===
                    AST_NODE_TYPES.TSQualifiedName
                  ) {
                    secondParamName = secondParam.typeName.right.name;
                  }
                } else if (
                  secondParam?.type === AST_NODE_TYPES.TSInterfaceHeritage ||
                  secondParam?.type === AST_NODE_TYPES.TSClassLiteral ||
                  secondParam?.type === AST_NODE_TYPES.TSInterfaceDeclaration
                ) {
                  secondParamName = className;
                }
                if (secondParamName !== className) {
                  context.report({
                    node: element,
                    messageId: 'invalidCreateReturn',
                  });
                }
              } else {
                context.report({
                  node: element,
                  messageId: 'invalidCreateReturn',
                });
              }
              continue;
            }

            if (isGetter || isSetter) {
              if (!isPublic) {
                context.report({
                  node: element,
                  messageId: 'invalidMethod',
                });
              }
              continue;
            }

            if (!isPublic) {
              context.report({
                node: element,
                messageId: 'invalidMethod',
              });
            } else if (isStatic && !methodName.startsWith('is')) {
              context.report({
                node: element,
                messageId: 'invalidMethod',
              });
            }
          }
        }
        if (!hasCreateMethod) {
          context.report({
            node,
            messageId: 'missingCreate',
          });
        }
      },
    };
  },
};
