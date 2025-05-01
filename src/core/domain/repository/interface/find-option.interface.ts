import type { DeepPartial } from '@base/core/domain/repository/type/deep-partial.type';
import type { FindOptionOrderType } from '@core/domain/repository/type/find-option-order.type';
import type { FindOptionRelationsType } from '@core/domain/repository/type/find-option-relation.type';
import type { FindOptionSelectType } from '@core/domain/repository/type/find-option-select.type';

export interface FindOptionInterface<T> {
  where?: DeepPartial<T> | DeepPartial<T>[];
  select?: DeepPartial<FindOptionSelectType<T>>;
  relations?: DeepPartial<FindOptionRelationsType<T>>;
  order?: DeepPartial<FindOptionOrderType<T>>;
}
