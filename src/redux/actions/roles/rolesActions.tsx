import axios from 'axios';
import {
  FETCH_ROLES_REQUEST,
  FETCH_ROLES_SUCCESS,
  FETCH_ROLES_FAILURE,
} from './rolesTypes';
// types
import { Dispatch } from 'redux';
import { RolesActionTypes } from './rolesTypes';
import { Roles } from './rolesTypes';

const fetchRolesRequest = (): RolesActionTypes => {
  return {
    type: FETCH_ROLES_REQUEST,
    loading: true,
    roles: [],
    error: '',
  };
};

const fetchRolesSuccess = (roles: Roles[]): RolesActionTypes => {
  return {
    type: FETCH_ROLES_SUCCESS,
    loading: false,
    roles: roles,
    error: '',
  };
};

const fetchRolesFailure = (error: string): RolesActionTypes => {
  return {
    type: FETCH_ROLES_FAILURE,
    loading: false,
    roles: [],
    error: error,
  };
};

export const fetchRoles = () => {
  return async (dispatch: Dispatch<RolesActionTypes>) => {
    dispatch(fetchRolesRequest());
    try {
      const request = await axios.get('http://localhost:3000/roles');
      const response = request.data;
      dispatch(fetchRolesSuccess(response));
    } catch (error: any) {
      dispatch(fetchRolesFailure('Something went wrong'));
    }
  };
};
