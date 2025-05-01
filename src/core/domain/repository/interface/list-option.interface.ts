export interface SearchItemOption {
  field: string;
  search: string;
}

export interface ListSearchOption {
  and?: SearchItemOption[];
  or?: SearchItemOption[];
}

export interface ListOption {
  page: number;
  limit: number;
  sortField?: string;
  search?: ListSearchOption;
}
