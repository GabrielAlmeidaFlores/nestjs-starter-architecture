export type SelectType<T> = {
  [K in keyof T]: T[K] extends object
    ? T[K] extends Array<infer U>
      ? SelectType<U>
      : SelectType<T[K]>
    : boolean;
};
