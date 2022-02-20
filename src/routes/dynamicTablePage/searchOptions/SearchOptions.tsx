// mui
import { Grid } from '@mui/material';
// styled
import { StyledGrid } from './StyledSearchOptions';
// components
import { SearchFieldsDateInput } from './searchFields/dateInput/SearchFieldsDateInput';
import { SearchFieldsRoleInput } from './searchFields/roleInput/SearchFieldsRoleInput';
import { SearchFieldsNameInput } from './searchFields/nameInput/SearchFieldsNameInput';
import { SearchFieldsAvailabilityInput } from './searchFields/availabilityInput/SearchFieldsAvailabilityInput';

export const SearchOptions = () => {
  return (
    <StyledGrid container columns={{ xs: 6, md: 10 }}>
      <Grid item md={2} xs={3}>
        <SearchFieldsDateInput
          valueToFilterBy={'dateFrom'}
          label={'Date from'}
        />
      </Grid>
      <Grid item md={2} xs={3}>
        <SearchFieldsDateInput valueToFilterBy={'dateTo'} label={'Date to'} />
      </Grid>
      <Grid item md={2} xs={2}>
        <SearchFieldsRoleInput />
      </Grid>
      <Grid item md={2} xs={2}>
        <SearchFieldsAvailabilityInput />
      </Grid>
      <Grid item md={2} xs={2}>
        <SearchFieldsNameInput />
      </Grid>
    </StyledGrid>
  );
};
