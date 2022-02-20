import {
  FETCH_TABLE_REQUEST,
  FETCH_TABLE_SUCCESS,
  FETCH_TABLE_FAILURE,
} from '../../actions/table/tableTypes';
// types
import { TableRows } from '../../actions/table/tableTypes';
import { TableRowActionTypes } from '../../actions/table/tableTypes';

interface TableRowsState {
  loading: boolean;
  rows: TableRows[];
  error: string;
}

const initialState: TableRowsState = {
  loading: false,
  rows: [],
  error: '',
};

const tableReducer = (
  state = initialState,
  action: TableRowActionTypes
): TableRowsState => {
  switch (action.type) {
    case FETCH_TABLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TABLE_SUCCESS:
      return {
        loading: false,
        rows: action.rows,
        error: '',
      };
    case FETCH_TABLE_FAILURE:
      return {
        loading: false,
        rows: [],
        error: action.error,
      };
    default:
      return state;
  }
};

export default tableReducer;
