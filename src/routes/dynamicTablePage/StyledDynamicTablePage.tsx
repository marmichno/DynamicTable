import styled from 'styled-components';
// mui
import { Grid } from '@mui/material';

export const StyledGrid = styled(Grid)`
  && {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    min-height: 669px;
    background-color: rgb(248, 248, 248);

    @media (max-width: 900px) {
      min-height: 580;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 15px;
      height: 15px;
      border: 1px solid black;
    }

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;
