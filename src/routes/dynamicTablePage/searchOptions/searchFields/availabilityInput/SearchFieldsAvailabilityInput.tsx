//styled
import { StyledFormControl } from '../styled/styledFormControl/StyledFormControl';
//mui
import { Select, SelectChangeEvent } from '@mui/material';
import { MenuItem } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
// hooks
import { useState } from 'react';
// actions
import { filterTableData } from '../../../../../redux/actions/table/sortAndFilter/filterData/filterDataActions';
// redux
import { useDispatch } from 'react-redux';

export const SearchFieldsAvailabilityInput = () => {
  const dispatch = useDispatch();
  const [availability, setAvailability] = useState<string>('all');

  const handleChange = (e: SelectChangeEvent) => {
    let selectValue = e.target.value;
    setAvailability(selectValue as string);
    dispatch(
      filterTableData({
        valueToFilterBy: 'availability',
        filterValue: selectValue === 'all' ? '' : selectValue,
      })
    );
  };

  return (
    <StyledFormControl variant="standard">
      <InputLabel id="availability-select-label">Availability</InputLabel>
      <Select
        labelId="availability-select-label"
        id="availability-select"
        value={availability}
        label="select availability"
        onChange={handleChange}
        variant="standard"
      >
        <MenuItem value={'all'}>all</MenuItem>
        <MenuItem value={'available'}>available</MenuItem>
        <MenuItem value={'not available'}>not available</MenuItem>
      </Select>
    </StyledFormControl>
  );
};
