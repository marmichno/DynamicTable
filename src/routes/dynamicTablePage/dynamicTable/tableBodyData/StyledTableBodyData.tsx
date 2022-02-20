import styled from 'styled-components';
// mui components
import { TableRow, TableCell, Typography } from '@mui/material';
import { Box } from '@mui/system';
// mui icons
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import CircularProgress from '@mui/material/CircularProgress';

export const StyledTableRow = styled(TableRow)`
  && {
    height: 115px;
    background-color: white;
    box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.75);
    overflow: scroll;

    @media (max-width: 900px) {
      height: 0;
    }
  }
`;

export const StyledEventAvailableIcon = styled(EventAvailableIcon)`
  && {
    color: green;
    height: 2em;
    width: 2em;
    opacity: 0.2;
  }
`;

export const StyledEventBusyIcon = styled(EventBusyIcon)`
  && {
    color: red;
    height: 2em;
    width: 2em;
    opacity: 0.2;
  }
`;

export const StyledBox = styled(Box)`
  && {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`;

export const StyledCircularProgress = styled(CircularProgress)`
  && {
    width: 60px;
    height: 60px;

    .colorPrimary {
      background-color: red;
    }
  }
`;

export const StyledTypography = styled(Typography)`
  && {
    position: absolute;
  }
`;

export const StyledTableCell = styled(TableCell)`
  && {
    font-size: 16px;
    text-align: center;
  }
`;
