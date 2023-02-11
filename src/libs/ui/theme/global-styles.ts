import { Interpolation } from '@emotion/react';
import { Theme } from '@mui/material';

export const globalStyles: Interpolation<Theme> = {
  html: { fontSize: 16, height: '100%', width: '100%' },
  body: { height: '100%', width: '100%' },
  '#root': { height: '100%' },
};
