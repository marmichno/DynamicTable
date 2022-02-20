// styledComponents
import { StyledTextField } from '../styled/styledTextField/StyledTextField';
// hooks
import { useState } from 'react';
// actions
import { filterTableData } from '../../../../../redux/actions/table/sortAndFilter/filterData/filterDataActions';
// redux
import { useDispatch } from 'react-redux';

export const SearchFieldsNameInput = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const selectedValue = e.target.value;
    setName(selectedValue as string);
    dispatch(
      filterTableData({
        valueToFilterBy: 'name',
        filterValue: selectedValue,
      })
    );
  };

  return (
    <StyledTextField
      InputLabelProps={{ shrink: true }}
      label="Enter name to search"
      placeholder="name"
      variant="standard"
      value={name}
      onChange={handleChange}
      inputProps={{
        autoComplete: 'off',
      }}
    ></StyledTextField>
  );
};
