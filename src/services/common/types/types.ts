export type Pagination = {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  totalItems: number;
};

export type Paginated<T> = {
  items: T[];
  pagination: Pagination;
};
