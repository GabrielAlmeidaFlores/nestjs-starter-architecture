'use strict';

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Enforce structure of ValueObjectInterface implementations',
      recommended: false,
    },
    schema: [],
    messages: {
      unknownStatic: 'Static method "{{ name }}" is not allowed. Only "create", "isValid", and optionally "generate" are permitted.',
      duplicateStatic: 'Duplicate static method "{{ name }}" is not allowed.',
      invalidCreateSignature: '"create" must have exactly one parameter named "value" of type string.',
      isValidNotPrivate: '"isValid" must be a private static method.',
      invalidIsValidSignature: '"isValid" must have exactly one parameter named "value" of type string.',
      tooManyConstructors: 'Only one constructor is allowed in value object classes.',
      invalidConstructor: 'Constructor must be private and accept only one parameter: public readonly value: string.',
      missingCreate: 'Missing required static method "create".',
      missingIsValid: 'Missing required private static method "isValid".',
      unknownInstanceMethod: 'Instance method "{{ name }}" is not allowed. Only "equals" and "toString" are permitted.',
    },
  },

  create(context) {
    return {
      ClassDeclaration(node) {
        const className = node.id?.name;
        if (!className) return;

        const implementsVOI = node.implements?.some((impl) => {
          return impl.expression?.name === 'ValueObjectInterface';
        });

        if (!implementsVOI) return;

        let constructorCount = 0;
        let validConstructor = false;
        const staticMethods = new Map();
        const allowedStatics = new Set(['create', 'isValid', 'generate']);
        const allowedInstanceMethods = new Set(['equals', 'toString']);

        for (const element of node.body.body) {
          if (element.type === 'MethodDefinition') {
            const isStatic = element.static;
            const methodName = element.key.name;

            if (element.kind === 'constructor') {
              constructorCount++;
              const isPrivate = element.accessibility === 'private';
              const params = element.value.params;

              if (
                isPrivate &&
                params.length === 1 &&
                params[0].type === 'TSParameterProperty' &&
                params[0].accessibility === 'public' &&
                params[0].readonly &&
                params[0].parameter.type === 'Identifier' &&
                params[0].parameter.name === 'value'
              ) {
                validConstructor = true;
              }
            } else if (isStatic) {
              if (!allowedStatics.has(methodName)) {
                context.report({
                  node: element,
                  messageId: 'unknownStatic',
                  data: { name: methodName },
                });
                continue;
              }

              if (staticMethods.has(methodName)) {
                context.report({
                  node: element,
                  messageId: 'duplicateStatic',
                  data: { name: methodName },
                });
                continue;
              }

              staticMethods.set(methodName, element);

              const params = element.value.params;

              if (methodName === 'create') {
                const param = params[0];
                if (
                  params.length !== 1 ||
                  param.type !== 'Identifier' ||
                  param.name !== 'value' ||
                  !param.typeAnnotation ||
                  param.typeAnnotation.typeAnnotation.type !== 'TSStringKeyword'
                ) {
                  context.report({
                    node: element,
                    messageId: 'invalidCreateSignature',
                  });
                }
              }

              if (methodName === 'isValid') {
                if (element.accessibility !== 'private') {
                  context.report({
                    node: element,
                    messageId: 'isValidNotPrivate',
                  });
                }

                const param = params[0];
                if (
                  params.length !== 1 ||
                  param.type !== 'Identifier' ||
                  param.name !== 'value' ||
                  !param.typeAnnotation ||
                  param.typeAnnotation.typeAnnotation.type !== 'TSStringKeyword'
                ) {
                  context.report({
                    node: element,
                    messageId: 'invalidIsValidSignature',
                  });
                }
              }
            } else {
              if (!allowedInstanceMethods.has(methodName)) {
                context.report({
                  node: element,
                  messageId: 'unknownInstanceMethod',
                  data: { name: methodName },
                });
              }
            }
          }
        }

        if (constructorCount > 1) {
          context.report({
            node,
            messageId: 'tooManyConstructors',
          });
        }

        if (!validConstructor) {
          context.report({
            node,
            messageId: 'invalidConstructor',
          });
        }

        if (!staticMethods.has('create')) {
          context.report({
            node,
            messageId: 'missingCreate',
          });
        }

        if (!staticMethods.has('isValid')) {
          context.report({
            node,
            messageId: 'missingIsValid',
          });
        }
      },
    };
  },
};
