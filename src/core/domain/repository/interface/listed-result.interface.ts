export interface ListedResult<T> {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  currentPageTotalItems: number;
  data: T[];
}
