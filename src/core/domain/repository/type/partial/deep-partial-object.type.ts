type PrimitiveType =
  | string
  | number
  | boolean
  | symbol
  | bigint
  | null
  | undefined;

export type DeepPartialObjectType<T> = T extends PrimitiveType
  ? T
  : T extends object
    ? {
        [K in keyof T]: T[K] extends infer U
          ? U extends PrimitiveType
            ? U
            : U extends object
              ? Partial<DeepPartialObjectType<U>>
              : U
          : never;
      }
    : T;
