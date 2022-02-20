import { FILTER_TABLE_DATA } from '../../../actions/table/sortAndFilter/filterData/filterDataTypes';
// types
import { FilterDataAction } from '../../../actions/table/sortAndFilter/filterData/filterDataTypes';

interface FilterDataState {
  valueToFilterBy: string;
  filterValue: string;
}

const initialState: FilterDataState[] = [];

const filterDataReducer = (
  state = initialState,
  action: FilterDataAction
): FilterDataState[] => {
  switch (action.type) {
    case FILTER_TABLE_DATA:
      const filter = {
        valueToFilterBy: action.valueToFilterBy,
        filterValue: action.filterValue,
      };

      const checkIfFilterExist = state.filter(
        (val) => val.valueToFilterBy === action.valueToFilterBy
      );

      // if filter doesnt exist add filter to array
      if (checkIfFilterExist.length === 0) {
        return [...state, filter];
      }

      // if filter exists remove filter and add new value
      if (checkIfFilterExist.length > 0) {
        // if passed value length > 0 replace previous value
        if (filter.filterValue.length > 0) {
          return state.map((val) => {
            if (val.valueToFilterBy === filter.valueToFilterBy) {
              return filter;
            } else {
              return val;
            }
          });
          // if passed value length <= 0 remove filter from array
        } else {
          return state.filter(
            (val) => val.valueToFilterBy !== action.valueToFilterBy
          );
        }
      }

      return state;

    default:
      return state;
  }
};

export default filterDataReducer;
