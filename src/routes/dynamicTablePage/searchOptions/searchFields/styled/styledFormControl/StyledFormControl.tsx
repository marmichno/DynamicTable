import styled from 'styled-components';
// mui
import { FormControl } from '@mui/material';

export const StyledFormControl = styled(FormControl)`
  && {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;

    .MuiInputLabel-root {
      font-size: 20px;
    }

    .MuiInput-root {
      padding: 10px 15px 6px 10px;
      font-size: 25px;
      font-weight: 100;
    }

    .MuiSelect-nativeInput {
      display: none;
    }

    .MuiSelect-select:focus {
      background-color: rgb(248, 248, 248);
    }

    @media (max-width: 1335px) {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
`;
