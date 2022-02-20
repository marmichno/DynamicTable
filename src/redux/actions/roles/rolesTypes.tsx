export const FETCH_ROLES_REQUEST = 'FETCH_ROLES_REQUEST';
export const FETCH_ROLES_SUCCESS = 'FETCH_ROLES_SUCCESS';
export const FETCH_ROLES_FAILURE = 'FETCH_ROLES_FAILURE';

export interface Roles {
  id: number;
  name: string;
}

interface RolesAsync {
  loading: boolean;
  roles: Roles[];
  error: string;
}

interface FetchRolesRequest extends RolesAsync {
  type: typeof FETCH_ROLES_REQUEST;
}

interface FetchRolesSuccess extends RolesAsync {
  type: typeof FETCH_ROLES_SUCCESS;
}

interface FetchRolesFailure extends RolesAsync {
  type: typeof FETCH_ROLES_FAILURE;
}

export type RolesActionTypes =
  | FetchRolesRequest
  | FetchRolesSuccess
  | FetchRolesFailure;
