export interface ListedResultInterface<T> {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  currentPageTotalItems: number;
  data: T[];
}
