import { TableHead, TableRow, TableSortLabel } from '@mui/material';
// styled
import { StyledTableCell } from './StyledTableHeader';
// redux
import { useAppSelector } from '../../../../hooks/hooks';
import { useDispatch } from 'react-redux';
// actions
import { sortTableData } from '../../../../redux/actions/table/sortAndFilter/sortData/sortDataActions';

interface TableRows {
  id: number;
  name: string;
  numericValue: number;
  dateValue: string;
  percentValue: string;
  role: string;
  availability: boolean;
}

const KeyToVal = {
  MyKey1: 'id',
  MyKey2: 'name',
  MyKey3: 'numericValue',
  MyKey4: 'dateValue',
  MyKey5: 'percentValue',
  MyKey6: 'role',
  MyKey7: 'availability',
} as const;

type Keys = keyof typeof KeyToVal;
type Values = typeof KeyToVal[Keys];

export const TableHeader = ({ tableRows }: { tableRows: TableRows[] }) => {
  const columns = Object.keys(tableRows[0]) as Array<Values>;

  const sortDataState = useAppSelector((state) => state.sortBy);
  const dispatch = useDispatch();

  const sortHandler = (row: Values) => (event: any) => {
    const isAscending = sortDataState.orderDirection === 'asc';
    dispatch(
      sortTableData({
        orderDirection: isAscending ? 'desc' : 'asc',
        valueToOrderBy: row,
      })
    );
  };

  return (
    <TableHead>
      <TableRow>
        {columns.map((val) => {
          return (
            <StyledTableCell align="center" key={val}>
              <TableSortLabel
                active={sortDataState.valueToOrderBy === val}
                direction={
                  sortDataState.valueToOrderBy === val
                    ? sortDataState.orderDirection
                    : 'asc'
                }
                onClick={sortHandler(val)}
              >
                {val.toUpperCase()}
              </TableSortLabel>
            </StyledTableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};
