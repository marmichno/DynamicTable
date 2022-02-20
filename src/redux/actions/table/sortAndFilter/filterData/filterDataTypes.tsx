export const FILTER_TABLE_DATA = 'FILTER_TABLE_DATA';

export interface Filter {
  valueToFilterBy: string;
  filterValue: string;
}

export interface FilterDataAction extends Filter {
  type: typeof FILTER_TABLE_DATA;
}
