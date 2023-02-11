import { createTheme } from '@mui/material/styles';

import { colors } from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.blue[600],
    },
  },
  typography: {
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h1: {
      fontSize: '2.25rem',
      fontWeight: 700,
    },
    button: {
      textTransform: 'capitalize',
    },
  },
  spacing: 4,
  shape: {
    borderRadius: 8,
  },
});

export default theme;
