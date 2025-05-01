import type { SearchItemOptionInterface } from '@core/domain/repository/interface/list/search-item-option.interface';

export interface CombinedSearchItemOptionInterface {
  and?: SearchItemOptionInterface[];
  or?: SearchItemOptionInterface[];
}
