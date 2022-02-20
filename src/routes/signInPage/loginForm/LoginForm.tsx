// mui
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from '@mui/material';
// input components
import { EmailInput } from './inputs/EmailInput';
import { PasswordInput } from './inputs/PasswordInput';
// react-hook-form
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// validation schema
import { validationSchema } from './validationSchema/validationSchema';
// router
import { useNavigate } from 'react-router-dom';
// hooks
import { useState } from 'react';
// styled
import {
  StyledCaptionContainer,
  StyledButton,
  StyledPaper,
  StyledPaperLoggedIn,
} from './styledLoginForm';
// logo
import logo from '../../../resources/img/logo.png';

interface InputForm {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const navigate = useNavigate();
  const [isUserLogged, setIsUserLogged] = useState<boolean>(
    !!localStorage.getItem('loggedInUser')
  );

  const methods = useForm<InputForm>({
    resolver: yupResolver(validationSchema),
  });

  const formSubmitHandler: SubmitHandler<InputForm> = (data) => {
    localStorage.setItem('loggedInUser', data.email);
    navigate('/');
  };

  const logout = () => {
    localStorage.removeItem('loggedInUser');
    setIsUserLogged(false);
  };

  const formSwitchRender = () => {
    if (isUserLogged) {
      return (
        <StyledPaperLoggedIn>
          <img alt="logo-placeholder" width="150px" height="150px" src={logo} />
          <Typography
            sx={{ textAlign: 'center', marginBottom: 2, maxWidth: '90%' }}
          >
            You are already logged in as:
          </Typography>
          <Typography
            sx={{ textAlign: 'center', marginBottom: 5, maxWidth: '90%' }}
          >
            {localStorage.getItem('loggedInUser')}
          </Typography>
          <Button variant="contained" fullWidth onClick={logout}>
            Logout
          </Button>
        </StyledPaperLoggedIn>
      );
    } else {
      return (
        <StyledPaper elevation={3}>
          <img alt="logo-placeholder" width="150px" height="150px" src={logo} />
          <Typography variant="h4" component="h2" sx={{ textAlign: 'center' }}>
            Sign in
          </Typography>

          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(formSubmitHandler)}
              noValidate
              autoComplete="off"
            >
              <EmailInput />
              <PasswordInput />
              <StyledButton variant="contained" fullWidth type="submit">
                Sign in
              </StyledButton>
            </form>
          </FormProvider>

          <StyledCaptionContainer>
            <Link href="#" underline="none">
              Forgot your password?
            </Link>
            <Link href="#" underline="none">
              Create account
            </Link>
          </StyledCaptionContainer>
        </StyledPaper>
      );
    }
  };

  return <>{formSwitchRender()}</>;
};
