import { StyledTextField } from '../styled/styledTextField/StyledTextField';
// hooks
import { useState } from 'react';
// actions
import { filterTableData } from '../../../../../redux/actions/table/sortAndFilter/filterData/filterDataActions';
// redux
import { useDispatch } from 'react-redux';

export const SearchFieldsDateInput = ({
  valueToFilterBy,
  label,
}: {
  valueToFilterBy: string;
  label: string;
}) => {
  const [date, setDate] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const selectedValue = e.target.value;
    setDate(selectedValue as string);
    dispatch(
      filterTableData({
        valueToFilterBy: valueToFilterBy,
        filterValue: e.target.value,
      })
    );
  };

  return (
    <StyledTextField
      label={label}
      InputLabelProps={{ shrink: true }}
      variant="standard"
      type="date"
      inputProps={{
        autoComplete: 'off',
      }}
      value={date}
      onChange={handleChange}
    ></StyledTextField>
  );
};
