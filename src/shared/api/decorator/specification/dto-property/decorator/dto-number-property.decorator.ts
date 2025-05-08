import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

import type { DtoPropertyDecoratorPropsInterface } from '@shared/api/decorator/specification/dto-property/dto-propery.decorator.props.interface';

export function DtoNumberProperty(
  props?: DtoPropertyDecoratorPropsInterface,
): PropertyDecorator {
  return applyDecorators(
    ApiProperty({ required: props?.required !== true }),
    IsNumber(),
    ...(props?.required === true ? [IsOptional()] : []),
  );
}
