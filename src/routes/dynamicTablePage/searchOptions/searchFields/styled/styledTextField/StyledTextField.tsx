import styled from 'styled-components';
// mui
import { TextField } from '@mui/material';

export const StyledTextField = styled(TextField)`
  && {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;

    .MuiInput-root {
      padding: 10px 15px 6px 10px;
      font-size: 25px;
      font-weight: 100;
    }

    .MuiFormLabel-root {
      font-size: 20px;
    }

    @media (max-width: 1335px) {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
`;
