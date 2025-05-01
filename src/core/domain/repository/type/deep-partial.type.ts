export type DeepPartialType<T> =
  | T
  | (T extends Array<infer U>
      ? DeepPartialType<U>[]
      : T extends Map<infer K, infer V>
        ? Map<DeepPartialType<K>, DeepPartialType<V>>
        : T extends Set<infer M>
          ? Set<DeepPartialType<M>>
          : T extends object
            ? {
                [K in keyof T]?: DeepPartialType<T[K]>;
              }
            : T);
