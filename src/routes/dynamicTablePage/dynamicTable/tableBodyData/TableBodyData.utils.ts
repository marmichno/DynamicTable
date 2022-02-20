export interface TableRows {
    id: number;
    name: string;
    numericValue: number;
    dateValue: string;
    percentValue: string;
    role: string;
    availability: boolean;
  }
  
  interface FilterDataState {
    valueToFilterBy: string;
    filterValue: string;
  }
  
  export const filterData = (
    tableRows: TableRows[],
    filters: FilterDataState[]
  ) => {
    if (filters.length === 0) {
      return tableRows;
    }
  
    const filterData = (
      row: TableRows,
      filterValue: string,
      columnName: string
    ) => {
      // if dateTo return only smaller values than date
      if (columnName === 'dateTo') {
        return row.dateValue < filterValue;
        // if dateFrom return only higher values than date
      } else if (columnName === 'dateFrom') {
        return row.dateValue > filterValue;
        // if availability return true or false depending on choosen value
      } else if (columnName === 'availability') {
        let boolean = true;
        if (filterValue === 'not available') {
          boolean = false;
        }
        return row.availability === boolean;
        // if role check if string includes filterValue
      } else if (columnName === 'role') {
        return row.role.includes(filterValue);
        // if name check if string includes filterValue
      } else if (columnName === 'name') {
        return row.name.includes(filterValue);
      }
    };
  
    const newArr = tableRows.filter((val) => {
      let falseCounter = 0;
      // loop over all filters and check if data should be returned
      for (let i = 0; i < filters.length; i++) {
        if (
          !filterData(val, filters[i].filterValue, filters[i].valueToFilterBy)
        ) {
          falseCounter++;
        }
      }
      return falseCounter > 0 ? false : true;
    });
    return newArr;
  };
  

  export interface TableRows {
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
  
  type OrderDirection = 'asc' | 'desc' | undefined;
  
  export const sortData = (
    tableRows: TableRows[],
    orderDirection: OrderDirection,
    valueToOrderBy: Values
  ) => {
    // if data is typeof number
    const sortNumerically = (a: any, b: any) => {
      if (orderDirection === 'asc') {
        return a - b;
      } else if (orderDirection === 'desc') {
        return b - a;
      } else {
        return 0;
      }
    };
  
    // if data is type of string
    const sortAlphabeticaly = (a: string, b: string) => {
      if (orderDirection === 'asc') {
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        }
        return 0;
      } else if (orderDirection === 'desc') {
        if (a > b) {
          return -1;
        } else if (a < b) {
          return 1;
        }
        return 0;
      }
      return 0;
    };
  
    // if data is type of boolean
    const sortByBoolean = (a: any, b: any) => {
      if (orderDirection === 'asc') {
        return a === b ? 0 : a ? -1 : 1;
      } else if (orderDirection === 'desc') {
        return a === b ? 0 : b ? -1 : 1;
      } else {
        return 0;
      }
    };
  
    // convert percentages to number
    const getPercentageValues = (s: any) => parseInt(s.match(/\d+/)[0]);
  
    return tableRows.sort((a, b) => {
      // if data is typeof string
      if (typeof a[valueToOrderBy] === 'string') {
        // check if string is percentage value
        if (/^\d+(\.\d+)?%$/.test(a[valueToOrderBy].toString())) {
          // sort as percentage string
          return sortNumerically(
            getPercentageValues(a[valueToOrderBy]),
            getPercentageValues(b[valueToOrderBy])
          );
        } else {
          //sort as string
          return sortAlphabeticaly(
            a[valueToOrderBy].toString(),
            b[valueToOrderBy].toString()
          );
        }
        // if data is type of number
      } else if (typeof a[valueToOrderBy] === 'number') {
        // sort as number
        return sortNumerically(a[valueToOrderBy], b[valueToOrderBy]);
        // if data is type of boolean
      } else if (typeof a[valueToOrderBy] === 'boolean') {
        // sort as boolean
        return sortByBoolean(a[valueToOrderBy], b[valueToOrderBy]);
      } else {
        return -1;
      }
    });
  };
  