import type { Type } from '@nestjs/common';

export type SuccessResponseType =
  | {
      statusCode: 200;
      description: string;
      type: Type<unknown>;
    }
  | {
      statusCode: 201;
      description: string;
      type: Type<unknown>;
    }
  | { statusCode: 204; description: string };
