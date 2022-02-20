import { Outlet, Navigate } from 'react-router';

export const ProtectedRoutes = () => {
  const isUserLoggedIn = !!localStorage.getItem('loggedInUser');
  return isUserLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" replace={true} />
  );
};
