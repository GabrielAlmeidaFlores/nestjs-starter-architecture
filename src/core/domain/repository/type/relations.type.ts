import type { BaseEntity } from '@base/core/domain/entity/base/base.entity';

export type RelationsType<T> = {
  [K in keyof T as T[K] extends BaseEntity
    ? K
    : T[K] extends Array<infer U>
      ? U extends BaseEntity
        ? K
        : never
      : never]?:
    | true
    | (T[K] extends Array<infer U> ? RelationsType<U> : RelationsType<T[K]>);
};
