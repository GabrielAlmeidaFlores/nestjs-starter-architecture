import type { ValueObjectInterface } from '@core/domain/value-object/value-object.interface';

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
  : T extends ValueObjectInterface<unknown>
    ? T
    : T extends object
      ? {
          [K in keyof T]: T[K] extends PrimitiveType
            ? T[K]
            : T[K] extends ValueObjectInterface<unknown>
              ? T[K]
              : T[K] | undefined;
        }
      : T;
