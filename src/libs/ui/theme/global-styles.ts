import { Interpolation } from '@emotion/react';
import { Theme } from '@mui/material';

import { colors } from './colors';

export const globalStyles: Interpolation<Theme> = {
  html: { fontSize: 14, height: '100%', width: '100%' },
  body: { height: '100%', width: '100%' },
  '#root': { height: '100%' },

  '#notistack': {
    '.SnackbarItem-variantSuccess': {
      backgroundColor: colors.purple[500],
    },
  },
};
