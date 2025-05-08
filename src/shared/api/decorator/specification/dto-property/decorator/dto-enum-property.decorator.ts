import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';

import type { DtoPropertyDecoratorPropsInterface } from '@shared/api/decorator/specification/dto-property/dto-propery.decorator.props.interface';

export function DtoEnumProperty(
  enumType: object,
  props?: DtoPropertyDecoratorPropsInterface,
): PropertyDecorator {
  return applyDecorators(
    ApiProperty({ enum: enumType, required: props?.required !== true }),
    IsEnum(enumType),
    ...(props?.required === true ? [IsOptional()] : []),
  );
}
