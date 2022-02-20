export const SORT_TABLE_DATA = 'SORT_TABLE_DATA';

const KeyToVal = {
  MyKey1: 'id',
  MyKey2: 'name',
  MyKey3: 'numericValue',
  MyKey4: 'dateValue',
  MyKey5: 'percentValue',
  MyKey6: 'role',
  MyKey7: 'availability',
} as const;

type Keys = keyof typeof KeyToVal;
type Values = typeof KeyToVal[Keys];

export interface SortData {
  orderDirection: 'asc' | 'desc' | undefined;
  valueToOrderBy: Values;
}

export interface SortDataAction extends SortData {
  type: typeof SORT_TABLE_DATA;
}
