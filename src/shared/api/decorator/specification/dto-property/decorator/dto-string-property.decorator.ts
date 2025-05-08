import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

import type { DtoPropertyDecoratorPropsInterface } from '@shared/api/decorator/specification/dto-property/dto-propery.decorator.props.interface';

export function DtoStringProperty(
  props?: DtoPropertyDecoratorPropsInterface,
): PropertyDecorator {
  return applyDecorators(
    ApiProperty({ required: props?.required !== true }),
    IsString(),
    ...(props?.required === true ? [IsOptional()] : []),
  );
}
