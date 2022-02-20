import styled from 'styled-components';
// mui
import { Grid } from '@mui/material';

export const StyledGrid = styled(Grid)`
  && {
    height: 10%;
    width: 95%;
    align-items: center;
    justify-content: center;

    @media (max-width: 900px) {
      height: 30%;
    }
  }
`;
