import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
// styled
import { StyledTypography, StyledBox } from './StyledUserBar';

export const UserBar = () => {
  let navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('loggedInUser');
    navigate(`/sign-in`, { replace: true });
  };

  return (
    <StyledBox>
      <StyledTypography>
        {localStorage.getItem('loggedInUser')}
      </StyledTypography>
      <Button variant="contained" onClick={logout}>
        logout
      </Button>
    </StyledBox>
  );
};
