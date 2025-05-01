import type { SearchItemOptionInterface } from '@core/domain/repository/interface/search-item-option.interface';

export interface ListSearchOptionInterface {
  and?: SearchItemOptionInterface[];
  or?: SearchItemOptionInterface[];
}
