// css
import './App.css';
// config
import { paths } from './config/paths';
// mui
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './resources/theme/theme';
// components
import { ProtectedRoutes } from './routes/defaultRoutes/protectedRoutes/ProtectedRoutes';
import { PageNotFound } from './routes/defaultRoutes/pageNotFound/PageNotFound';
import { SignInPage } from './routes/signInPage/SignInPage';
import { DynamicTablePage } from './routes/dynamicTablePage/DynamicTablePage';
// router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path={paths.signIn} element={<SignInPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path={paths.home} element={<DynamicTablePage />} />
          </Route>
          <Route path={paths.notFound} element={<PageNotFound />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
