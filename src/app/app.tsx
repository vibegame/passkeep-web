import '@app/libs/validation/yup.config';

import { AuthProvider } from '@app/libs/auth';
import { globalStyles, theme } from '@app/libs/ui';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';

import AppRouter from '../router';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={5}
          autoHideDuration={5000}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <CssBaseline />
          <GlobalStyles styles={globalStyles} />
          <AppRouter />
        </SnackbarProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
