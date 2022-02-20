// mui
import { StyledGrid } from './StyledDynamicTablePage';
// components
import { UserBar } from './userBar/UserBar';
import { SearchOptions } from './searchOptions/SearchOptions';
import { DynamicTable } from './dynamicTable/DynamicTable';

export const DynamicTablePage = () => {
  return (
    <StyledGrid container spacing={0}>
      <UserBar />
      <SearchOptions />
      <DynamicTable />
    </StyledGrid>
  );
};
