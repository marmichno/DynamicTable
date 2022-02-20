import { SORT_TABLE_DATA } from '../../../actions/table/sortAndFilter/sortData/sortDataTypes';
// types
import { SortDataAction } from '../../../actions/table/sortAndFilter/sortData/sortDataTypes';

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

interface SortDataState {
  orderDirection: 'asc' | 'desc' | undefined;
  valueToOrderBy: Values;
}

const initialState: SortDataState = {
  orderDirection: 'asc',
  valueToOrderBy: 'dateValue',
};

const sortDataReducer = (
  state = initialState,
  action: SortDataAction
): SortDataState => {
  switch (action.type) {
    case SORT_TABLE_DATA:
      return {
        orderDirection: action.orderDirection,
        valueToOrderBy: action.valueToOrderBy,
      };
    default:
      return state;
  }
};

export default sortDataReducer;
