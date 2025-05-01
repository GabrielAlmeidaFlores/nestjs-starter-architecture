export type FindOptionSelectType<T> = {
  [K in keyof T]: T[K] extends object
    ? T[K] extends Array<infer U>
      ? FindOptionSelectType<U>
      : FindOptionSelectType<T[K]>
    : boolean;
};
