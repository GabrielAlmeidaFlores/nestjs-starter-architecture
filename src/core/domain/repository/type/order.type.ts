export type OrderType<T> = {
  [K in keyof T]: T[K] extends object
    ? T[K] extends Array<infer U>
      ? OrderType<U>
      : OrderType<T[K]>
    : 'ASC' | 'DESC';
};
