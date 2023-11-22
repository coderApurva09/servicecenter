import { useRoutes } from 'react-router-dom';
import router from 'src/router';

import { SnackbarProvider } from 'notistack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';

import ExtendedSidebarLayout from './layouts/ExtendedSidebarLayout';
import AppInit from './library/AppInit';

function App() {
  const content = useRoutes(router);

  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <SnackbarProvider
          maxSnack={6}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
        >
          <CssBaseline />
          {true ? content : <AppInit />}
        </SnackbarProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
export default App;
