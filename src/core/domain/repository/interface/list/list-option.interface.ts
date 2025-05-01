import type { CombinedSearchItemOptionInterface } from '@core/domain/repository/interface/list/combined-search-item-option.interface';

export interface ListOptionInterface {
  page: number;
  limit: number;
  sortField?: string;
  search?: CombinedSearchItemOptionInterface;
}
