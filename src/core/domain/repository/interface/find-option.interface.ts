import type { FindOptionOrder } from '@core/domain/repository/type/find-option-order.type';
import type { FindOptionRelation } from '@core/domain/repository/type/find-option-relation.type';
import type { FindOptionSelect } from '@core/domain/repository/type/find-option-select.type';
import type { FindOptionWhere } from '@core/domain/repository/type/find-option-where.type';

export interface FindOption<Entity> {
  where?: FindOptionWhere<Entity> | FindOptionWhere<Entity>[];
  select?: FindOptionSelect<Entity>;
  relations?: FindOptionRelation<Entity>;
  order?: FindOptionOrder<Entity>;
  skip?: number;
  take?: number;
}
