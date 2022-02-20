import axios from 'axios';
import {
  FETCH_TABLE_REQUEST,
  FETCH_TABLE_SUCCESS,
  FETCH_TABLE_FAILURE,
} from './tableTypes';
// types
import { Dispatch } from 'redux';
import { TableRowActionTypes } from './tableTypes';
import { TableRows } from './tableTypes';

const fetchTableRequest = (): TableRowActionTypes => {
  return {
    type: FETCH_TABLE_REQUEST,
    loading: true,
    rows: [],
    error: '',
  };
};

const fetchTableSuccess = (rows: TableRows[]): TableRowActionTypes => {
  return {
    type: FETCH_TABLE_SUCCESS,
    loading: false,
    rows: rows,
    error: '',
  };
};

const fetchTableFailure = (error: string): TableRowActionTypes => {
  return {
    type: FETCH_TABLE_FAILURE,
    loading: false,
    rows: [],
    error: error,
  };
};

export const fetchTable = () => {
  return async (dispatch: Dispatch<TableRowActionTypes>) => {
    dispatch(fetchTableRequest());
    try {
      const request = await axios.get('http://localhost:3000/tableRow');
      const response = request.data;
      dispatch(fetchTableSuccess(response));
    } catch (error: any) {
      dispatch(fetchTableFailure('Something went wrong'));
    }
  };
};
