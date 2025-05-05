import type { SearchItemOptionInterface } from '@core/domain/repository/interface/list/search-item-option.interface';

export interface ListOptionInterface {
  page: number;
  limit: number;
  sortField?: string;
  search?: SearchItemOptionInterface;
}
