export type FindOrderOptionType<T> = {
  [K in keyof T]: T[K] extends object
    ? T[K] extends Array<infer U>
      ? FindOrderOptionType<U>
      : FindOrderOptionType<T[K]>
    : 'ASC' | 'DESC';
};
