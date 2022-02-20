import styled from 'styled-components';
// mui
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

export const StyledBox = styled(Box)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10%;

    @media (max-width: 900px) {
      height: 10%;
    }
  }
`;

export const StyledTypography = styled(Typography)`
  && {
    margin-right: 30px;
  }
`;
