import type { ObjectLiteral } from '@core/domain/repository/interface/object-literal.interface';

type _DeepPartialQuery<T> = {
  [P in keyof T]?:
    | (T[P] extends Array<infer U>
        ? Array<_DeepPartialQuery<U>>
        : T[P] extends ReadonlyArray<infer U>
          ? ReadonlyArray<_DeepPartialQuery<U>>
          : _DeepPartialQuery<T[P]>)
    | (() => string);
};

export type DeepPartialQuery<T> = _DeepPartialQuery<
  ObjectLiteral extends T ? unknown : T
>;
