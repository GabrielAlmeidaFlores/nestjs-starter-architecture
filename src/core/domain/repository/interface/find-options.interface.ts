import type { DeepPartial } from '@base/core/domain/repository/type/deep-partial.type';
import type { OrderType } from '@core/domain/repository/type/order.type';
import type { RelationsType } from '@core/domain/repository/type/relations.type';
import type { SelectType } from '@core/domain/repository/type/select.type';

export interface FindOptionsInterface<T> {
  where?: DeepPartial<T> | DeepPartial<T>[];
  select?: DeepPartial<SelectType<T>>;
  relations?: DeepPartial<RelationsType<T>>;
  order?: DeepPartial<OrderType<T>>;
}
