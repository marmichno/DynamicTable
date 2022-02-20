// styled
import {
  StyledTableContainer,
  StyledTable,
  StyledBox,
} from './StyledDynamicTable';
// mui
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';
// redux
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../hooks/hooks';
import { fetchTable } from '../../../redux/actions';
// hooks
import { useEffect } from 'react';
// components
import { TableHeader } from './tableHeader/TableHeader';
import { TableBodyData } from './tableBodyData/TableBodyData';

export const DynamicTable = () => {
  const dispatch = useDispatch();
  const tableRows = useAppSelector((state) => state.tableRows);

  useEffect(() => {
    dispatch(fetchTable());
  }, [dispatch]);

  if (tableRows.loading) {
    return (
      <StyledBox>
        <CircularProgress />
      </StyledBox>
    );
  } else if (tableRows.error) {
    return (
      <StyledBox>
        <Typography variant="h3" component="h3">
          something went wrong
        </Typography>
      </StyledBox>
    );
  } else if (tableRows.rows.length > 0) {
    return (
      <StyledTableContainer>
        <StyledTable aria-label="simple table" stickyHeader>
          <TableHeader tableRows={tableRows.rows} />
          <TableBodyData tableRows={tableRows.rows} />
        </StyledTable>
      </StyledTableContainer>
    );
  } else {
    return (
      <StyledTableContainer>
        <Typography variant="h3" component="h3">
          there is no data to display
        </Typography>
      </StyledTableContainer>
    );
  }
};
