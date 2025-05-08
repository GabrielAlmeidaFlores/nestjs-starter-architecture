export interface ListedDataObjectPropsInterface<T> {
  page: number;
  limit: number;
  totalItems: number;
  resource: T[];
}
