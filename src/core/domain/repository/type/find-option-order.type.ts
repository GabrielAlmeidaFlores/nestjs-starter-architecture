export type FindOptionOrderType<T> = {
  [K in keyof T]: T[K] extends object
    ? T[K] extends Array<infer U>
      ? FindOptionOrderType<U>
      : FindOptionOrderType<T[K]>
    : 'ASC' | 'DESC';
};
