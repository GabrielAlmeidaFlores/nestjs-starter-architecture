import type { ListSearchOptionInterface } from '@core/domain/repository/interface/list-search-option.interface';

export interface ListOptionInterface {
  page: number;
  limit: number;
  sortField?: string;
  search?: ListSearchOptionInterface;
}
