import styled from 'styled-components';
// mui components
import { Grid } from '@mui/material';
// image
import loginPageBackground from '../../resources/img/loginPageBackground.png';

export const StyledGrid = styled(Grid)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 580;
  background-image: url(${loginPageBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 1058px) {
    background-size: 60%;
  }

  @media (max-width: 910px) {
    background-size: 70%;
  }

  @media (max-width: 700px) {
    background-size: 80%;
  }

  @media (max-width: 566px) {
    background-size: 100%;
  }
`;
