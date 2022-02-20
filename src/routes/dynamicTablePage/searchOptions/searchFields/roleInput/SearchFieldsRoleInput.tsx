//styled
import { StyledFormControl } from '../styled/styledFormControl/StyledFormControl';
//mui
import { Select, SelectChangeEvent } from '@mui/material';
import { MenuItem } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
// hooks
import { useState, useEffect } from 'react';
// actions
import { fetchRoles } from '../../../../../redux/actions/roles/rolesActions';
import { filterTableData } from '../../../../../redux/actions/table/sortAndFilter/filterData/filterDataActions';
// redux
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../../hooks/hooks';

export const SearchFieldsRoleInput = () => {
  const dispatch = useDispatch();
  const [role, setRole] = useState<string>('all roles');
  const roles = useAppSelector((state) => state.roles);

  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);

  const handleChange = (e: SelectChangeEvent) => {
    let selectValue = e.target.value;
    setRole(selectValue as string);
    dispatch(
      filterTableData({
        valueToFilterBy: 'role',
        filterValue: selectValue === 'all roles' ? '' : selectValue,
      })
    );
  };

  const rolesSwitch = () => {
    if (roles.loading) {
      return <MenuItem value={'all roles'}>roles are loading</MenuItem>;
    } else if (roles.error) {
      return <MenuItem value={'all roles'}>couldnt fetch roles</MenuItem>;
    } else {
      return roles.roles.map((val) => {
        return (
          <MenuItem key={val.id} value={`${val.name}`}>
            {val.name}
          </MenuItem>
        );
      });
    }
  };

  return (
    <StyledFormControl variant="standard">
      <InputLabel id="role-select-label">Role</InputLabel>
      <Select
        labelId="role-select-label"
        id="role-select"
        value={role}
        label="select role"
        onChange={handleChange}
        variant="standard"
      >
        <MenuItem value={'all roles'}>all roles</MenuItem>
        {rolesSwitch()}
      </Select>
    </StyledFormControl>
  );
};
