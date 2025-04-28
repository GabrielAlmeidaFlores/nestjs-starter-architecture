import type { ListSearchOptionsInterface } from '@core/domain/repository/interface/list-search-options.interface';

export interface ListOptionsInterface {
  page: number;
  limit: number;
  sortField?: string;
  search: ListSearchOptionsInterface;
}
