// common
import { combineReducers } from 'redux';
// store
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// roles
import rolesReducer from './reducers/table/roles/rolesReducer';
// table
import tableReducer from './reducers/table/tableReducer';
// table sort and filter
import sortDataReducer from './reducers/table/sortAndFilter/sortReducer';
import filterDataReducer from './reducers/table/sortAndFilter/filterReducer';

export const rootReducer = combineReducers({
  tableRows: tableReducer,
  roles: rolesReducer,
  sortBy: sortDataReducer,
  dataFilters: filterDataReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;
