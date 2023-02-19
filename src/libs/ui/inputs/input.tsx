import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';

import { fontFamily } from '../theme';

const Input = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    position: 'relative',
    width: '100%',
    padding: '10px 12px',
    borderRadius: 8,
    backgroundColor: theme.palette.background.paper,
    fontSize: '1rem',
    fontWeight: 400,
    fontFamily: fontFamily,
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
  },

  '&.Mui-error': {
    '.MuiInputBase-input': {
      boxShadow: `inset 0 0 0 2px ${theme.palette.error.main}`,
    },
  },
}));

export default Input;
