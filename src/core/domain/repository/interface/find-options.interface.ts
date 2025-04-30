import type { DeepPartial } from '@base/core/domain/repository/type/deep-partial.type';
import type { FindOptionOrderType } from '@core/domain/repository/type/find-option-order.type';
import type { FindOptionRelationType } from '@core/domain/repository/type/find-option-relation.type';
import type { FindOptionSelectType } from '@core/domain/repository/type/find-option-select.type';

export interface FindOptionsInterface<T> {
  select?: FindOptionSelectType<T>;
  where?: DeepPartial<T> | DeepPartial<T>[];
  relations?: FindOptionRelationType<T>;
  order?: FindOptionOrderType<T>;
}
