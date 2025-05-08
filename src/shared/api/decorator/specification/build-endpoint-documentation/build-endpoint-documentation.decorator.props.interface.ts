import type { SuccessResponseType } from '@shared/api/decorator/specification/build-endpoint-documentation/type/success-response.type';

export interface BuildEndpointDocumentationDecoratorPropsInterface {
  summary: string;
  secure: boolean;
  deprecated?: boolean;
  successResponse: SuccessResponseType;
}
