export type FindOperator<T> =
  | { _type: 'equal'; value: T }
  | { _type: 'not'; value: T }
  | { _type: 'lessThan'; value: T }
  | { _type: 'lessThanOrEqual'; value: T }
  | { _type: 'moreThan'; value: T }
  | { _type: 'moreThanOrEqual'; value: T }
  | { _type: 'like'; value: string }
  | { _type: 'in'; value: T[] }
  | { _type: 'between'; value: [T, T] };

export type FindOptionWhere<Entity> = {
  [P in keyof Entity]?: Entity[P] extends object
    ? Entity[P] extends Array<infer U>
      ? FindOptionWhere<U> | FindOperator<U[]>
      : FindOptionWhere<Entity[P]> | FindOperator<Entity[P]>
    : Entity[P] | FindOperator<Entity[P]>;
};
