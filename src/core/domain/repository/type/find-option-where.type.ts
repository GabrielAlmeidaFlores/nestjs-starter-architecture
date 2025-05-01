import type { FindOperatorType } from '@core/domain/repository/type/find-operator.type';

export type FindOptionWhereType<Entity> = {
  [P in keyof Entity]?: Entity[P] extends object
    ? Entity[P] extends Array<infer U>
      ? FindOptionWhereType<U> | FindOperatorType<U[]>
      : FindOptionWhereType<Entity[P]> | FindOperatorType<Entity[P]>
    : Entity[P] | FindOperatorType<Entity[P]>;
};
