import { formLabelClasses } from '@mui/material/FormLabel';
import { createTheme } from '@mui/material/styles';
import { alpha } from '@mui/system';

import { colors } from './colors';
import { fontFamily } from './fonts';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.purple[400],
    },
    text: {
      primary: 'rgb(255, 255, 255)',
    },
    background: {
      default: colors.darkPurple[900],
      paper: colors.darkPurple[500],
    },
    error: {
      main: colors.raspberry[500],
    },
  },
  typography: {
    fontFamily,
    h6: {
      fontSize: '1.15rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.35rem',
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
      fontSize: '1rem',
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
  spacing: 4,
  shape: {
    borderRadius: 8,
  },

  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: colors.darkPurple[400],
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          body1: 'span',
          body2: 'span',
        },
      },
      styleOverrides: {
        root: {
          display: 'inline-block',
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        list: {
          padding: 0,
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundImage: 'none',
          boxShadow: 'none',

          '&.MuiMenu-paper': {
            minWidth: 120,
            borderRadius: 8,
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: ({ theme }) => ({
          backgroundColor: theme.palette.background.default,
        }),
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: '1.25rem',
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          fontSize: 16,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
      variants: [
        {
          props: { variant: 'gradient' },
          style: ({ theme }) => ({
            backgroundImage: `linear-gradient(to right, ${colors.raspberry[400]} 0%, ${colors.purple[600]}  51%, ${colors.raspberry[400]}  100%)`,
            backgroundSize: '200% auto',
            color: theme.palette.common.white,
            transition: '500ms',

            '.MuiTouchRipple-child': {
              backgroundColor: theme.palette.common.white,
            },

            ':hover': {
              backgroundPosition: 'right center',
              boxShadow: 'none',
            },
          }),
        },
        {
          props: { color: 'primary' },
          style: () => ({
            color: 'white',

            ':hover': {
              backgroundColor: alpha('#ffffff', 0.08),
            },
          }),
        },
      ],
    },
    MuiCheckbox: {
      styleOverrides: {
        colorPrimary: {
          color: colors.darkPurple[200],

          '&.Mui-checked': {
            color: colors.purple[300],
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: { color: colors.purple[400] },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.primary,
          fontWeight: 500,

          [`&.${formLabelClasses.focused}`]: {
            color: theme.palette.text.primary,
          },

          [`&.${formLabelClasses.error}`]: {
            color: theme.palette.error.main,
          },
        }),
      },
    },
  },
});

export default theme;
