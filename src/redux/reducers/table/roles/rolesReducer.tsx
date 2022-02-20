import {
  FETCH_ROLES_REQUEST,
  FETCH_ROLES_SUCCESS,
  FETCH_ROLES_FAILURE,
} from '../../../actions/roles/rolesTypes';
// types
import { Roles } from '../../../actions/roles/rolesTypes';
import { RolesActionTypes } from '../../../actions/roles/rolesTypes';

interface RolesState {
  loading: boolean;
  roles: Roles[];
  error: string;
}

const initialState: RolesState = {
  loading: false,
  roles: [],
  error: '',
};

const rolesReducer = (
  state = initialState,
  action: RolesActionTypes
): RolesState => {
  switch (action.type) {
    case FETCH_ROLES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ROLES_SUCCESS:
      return {
        loading: false,
        roles: action.roles,
        error: '',
      };
    case FETCH_ROLES_FAILURE:
      return {
        loading: false,
        roles: [],
        error: action.error,
      };
    default:
      return state;
  }
};

export default rolesReducer;
