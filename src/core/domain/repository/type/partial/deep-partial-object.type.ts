import type { BaseValueObject } from '@core/domain/value-object/base/base.value-object';

type PrimitiveType =
  | string
  | number
  | boolean
  | symbol
  | bigint
  | null
  | undefined
  | Date;

export type DeepPartialObjectType<T> = T extends PrimitiveType
  ? T
  : T extends BaseValueObject<unknown>
    ? T
    : T extends object
      ? {
          [K in keyof T]: T[K] extends PrimitiveType
            ? T[K]
            : T[K] extends BaseValueObject<unknown>
              ? T[K]
              : T[K] | undefined;
        }
      : T;
