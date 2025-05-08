import { applyDecorators } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { ErrorResponseDto } from '@shared/api/dto/response/error/error.response.dto';

import type { ApiResponseOptions } from '@nestjs/swagger';
import type { BuildEndpointDocumentationDecoratorPropsInterface } from '@shared/api/decorator/specification/build-endpoint-documentation/build-endpoint-documentation.decorator.props.interface';
import type { SuccessResponseType } from '@shared/api/decorator/specification/build-endpoint-documentation/type/success-response.type';

function buildAuthDocumentationDecorators(
  secure: boolean,
): (MethodDecorator & ClassDecorator)[] {
  const decorators: (MethodDecorator & ClassDecorator)[] = [];

  if (secure) {
    decorators.push(ApiBearerAuth());
  }

  return decorators;
}

function buildResponseDocumentationDecorators(
  successResponse: SuccessResponseType,
): (MethodDecorator & ClassDecorator)[] {
  const successResponseOptions: ApiResponseOptions = {
    status: successResponse.statusCode,
    description: successResponse.description,
  };

  if (successResponse.statusCode === 200) {
    successResponseOptions.type = successResponse.type;
  }

  return [
    ApiResponse(successResponseOptions),
    ApiResponse({
      status: '4XX',
      description: 'Client error',
      type: ErrorResponseDto,
    }),
    ApiResponse({
      status: '5XX',
      description: 'Server error',
      type: ErrorResponseDto,
    }),
  ];
}

export function BuildEndpointDocumentation(
  props: BuildEndpointDocumentationDecoratorPropsInterface,
): MethodDecorator {
  const decorators = [
    ApiOperation({
      summary: props.summary,
      deprecated: props.deprecated ?? false,
    }),
    ...buildResponseDocumentationDecorators(props.successResponse),
    ...buildAuthDocumentationDecorators(props.secure),
  ];

  return applyDecorators(...decorators);
}
