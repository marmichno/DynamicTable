export const FETCH_TABLE_REQUEST = 'FETCH_TABLE_REQUEST';
export const FETCH_TABLE_SUCCESS = 'FETCH_TABLE_SUCCESS';
export const FETCH_TABLE_FAILURE = 'FETCH_TABLE_FAILURE';

export interface TableRows {
  id: number;
  name: string;
  numericValue: number;
  dateValue: string;
  percentValue: string;
  role: string;
  availability: boolean;
}

interface TableAsync {
  loading: boolean;
  rows: TableRows[];
  error: string;
}

interface FetchTableRequest extends TableAsync {
  type: typeof FETCH_TABLE_REQUEST;
}

interface FetchTableSuccess extends TableAsync {
  type: typeof FETCH_TABLE_SUCCESS;
}

interface FetchTableFailure extends TableAsync {
  type: typeof FETCH_TABLE_FAILURE;
}

export type TableRowActionTypes =
  | FetchTableRequest
  | FetchTableSuccess
  | FetchTableFailure;
