import type { SearchItemOptionsInterface } from '@core/domain/repository/interface/search-item-options.interface';

export interface ListSearchOptionsInterface {
  and?: SearchItemOptionsInterface[];
  or?: SearchItemOptionsInterface[];
}
