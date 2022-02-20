import { TableBody } from '@mui/material';
// styled
import {
  StyledTableRow,
  StyledBox,
  StyledCircularProgress,
  StyledTypography,
  StyledTableCell,
} from './StyledTableBodyData';
// functions
import { sortData } from './TableBodyData.utils';
import { filterData } from './TableBodyData.utils';
// redux
import { useAppSelector } from '../../../../hooks/hooks';
// hooks
import { useState, useEffect } from 'react';
// icons
import { StyledEventAvailableIcon } from './StyledTableBodyData';
import { StyledEventBusyIcon } from './StyledTableBodyData';

export interface TableRows {
  id: number;
  name: string;
  numericValue: number;
  dateValue: string;
  percentValue: string;
  role: string;
  availability: boolean;
}

export const TableBodyData = ({ tableRows }: { tableRows: TableRows[] }) => {
  const sortDataState = useAppSelector((state) => state.sortBy);
  const filterDataState = useAppSelector((state) => state.dataFilters);
  const [filteredAndSortedArr, setFilteredAndSortedArr] = useState<TableRows[]>(
    []
  );

  useEffect(() => {
    let arr = filterData(tableRows, filterDataState);
    arr = sortData(
      arr,
      sortDataState.orderDirection,
      sortDataState.valueToOrderBy
    );
    setFilteredAndSortedArr([...arr]);
  }, [filterDataState, sortDataState, tableRows]);

  return (
    <TableBody>
      {filteredAndSortedArr.map((row) => (
        <StyledTableRow key={row.name}>
          <StyledTableCell>{row.id}</StyledTableCell>
          <StyledTableCell>{row.name}</StyledTableCell>
          <StyledTableCell>{row.numericValue}</StyledTableCell>
          <StyledTableCell>{row.dateValue}</StyledTableCell>
          <StyledTableCell>
            <StyledBox>
              <StyledCircularProgress
                size={60}
                value={parseFloat(row.percentValue)}
                variant="determinate"
              />
              <StyledTypography>{row.percentValue}</StyledTypography>
            </StyledBox>
          </StyledTableCell>
          <StyledTableCell>{row.role}</StyledTableCell>
          <StyledTableCell>
            {row.availability ? (
              <StyledEventAvailableIcon />
            ) : (
              <StyledEventBusyIcon />
            )}
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  );
};
