import { SORT_TABLE_DATA } from './sortDataTypes';
import { SortData } from './sortDataTypes';
import { SortDataAction } from './sortDataTypes';

export const sortTableData = (sort: SortData): SortDataAction => {
  return {
    type: SORT_TABLE_DATA,
    orderDirection: sort.orderDirection,
    valueToOrderBy: sort.valueToOrderBy,
  };
};
