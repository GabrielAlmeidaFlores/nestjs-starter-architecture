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
  : T extends object
    ? Partial<{
        [K in keyof T]: DeepPartialObjectType<T[K]>;
      }>
    : T;
