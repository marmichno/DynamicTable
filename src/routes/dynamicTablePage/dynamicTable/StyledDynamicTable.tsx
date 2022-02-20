import styled from 'styled-components';
// mui
import { TableContainer } from '@mui/material';
import { Table, Box } from '@mui/material';
// image
import dynamicTablePageBackground from '../../../resources/img/dynamicTablePageBackground.png';

export const StyledTableContainer = styled(TableContainer)`
  && {
    height: 77%;
    width: 95%;
    position: relative;
    margin-top: 10px;
    background-image: url(${dynamicTablePageBackground});
    background-blend-mode: saturation;
    background-color: rgba(248, 248, 248, 0.8);
    background-position: top;
    background-repeat: no-repeat;
    background-size: 45%;

    /* Hide scrollbar for IE, Edge and Firefox */
    &::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    @media (max-width: 1350px) {
      background-position: bottom;
      background-size: contain;
    }

    @media (max-width: 930px) {
      &::-webkit-scrollbar {
        display: initial;
        width: 8px;
        height: 8px;
      }

      scrollbar-width: thin; /* Firefox */

      /* Track */
      &::-webkit-scrollbar-track {
        background: transparent;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: #196a6d;
      }

      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background: #2bbbbf;
      }
    }

    @media (max-width: 900px) {
      height: 60%;
      margin-top: 0;
    }
  }
`;

export const StyledTable = styled(Table)`
  && {
    border-collapse: separate;
    border-spacing: 0px 25px;
  }
`;

export const StyledBox = styled(Box)`
  && {
    height: 80%;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${dynamicTablePageBackground});
    background-blend-mode: saturation;
    background-color: rgba(248, 248, 248, 0.8);
    background-position: top;
    background-repeat: no-repeat;
    background-size: 45%;
  }
`;
