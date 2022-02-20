import { FILTER_TABLE_DATA } from './filterDataTypes';
import { Filter } from './filterDataTypes';
import { FilterDataAction } from './filterDataTypes';

export const filterTableData = (filter: Filter): FilterDataAction => {
  return {
    type: FILTER_TABLE_DATA,
    valueToFilterBy: filter.valueToFilterBy,
    filterValue: filter.filterValue,
  };
};
