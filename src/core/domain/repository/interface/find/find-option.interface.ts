import type { FindOptionOrderType } from '@core/domain/repository/type/find-option-order.type';
import type { FindOptionRelationType } from '@core/domain/repository/type/find-option-relation.type';
import type { FindOptionSelectType } from '@core/domain/repository/type/find-option-select.type';
import type { FindOptionWhereType } from '@core/domain/repository/type/find-option-where.type';

export interface FindOptionInterface<Entity> {
  where?: FindOptionWhereType<Entity> | FindOptionWhereType<Entity>[];
  select?: FindOptionSelectType<Entity>;
  relations?: FindOptionRelationType<Entity>;
  order?: FindOptionOrderType<Entity>;
  skip?: number;
  take?: number;
}
