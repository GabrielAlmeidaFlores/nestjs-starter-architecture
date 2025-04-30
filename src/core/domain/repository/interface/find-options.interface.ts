import type { DeepPartial } from '@base/core/domain/repository/type/deep-partial.type';
import type { FindOptionSelectType } from '@core/domain/repository/type/find-option-select.type';
import type { FindOrderOptionType } from '@core/domain/repository/type/find-order-option.type';
import type { FindRelationOptionType } from '@core/domain/repository/type/find-relation-option.type';

export interface FindOptionsInterface<T> {
  select?: FindOptionSelectType<T>;
  where?: DeepPartial<T> | DeepPartial<T>[];
  relations?: DeepPartial<FindRelationOptionType<T>>;
  order?: DeepPartial<FindOrderOptionType<T>>;
}
