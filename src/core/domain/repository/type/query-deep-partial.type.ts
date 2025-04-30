import type { ObjectLiteral } from '@core/domain/repository/interface/object-literal.interface';

type _QueryDeepPartial<T> = {
  [P in keyof T]?:
    | (T[P] extends Array<infer U>
        ? Array<_QueryDeepPartial<U>>
        : T[P] extends ReadonlyArray<infer U>
          ? ReadonlyArray<_QueryDeepPartial<U>>
          : _QueryDeepPartial<T[P]>)
    | (() => string);
};

export type QueryDeepPartial<T> = _QueryDeepPartial<
  ObjectLiteral extends T ? unknown : T
>;
