import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';

import { colors, fontFamily } from '../../theme';

const Input = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    position: 'relative',
    width: '100%',
    padding: '10px 12px',
    borderRadius: 8,
    backgroundColor: 'white',
    boxShadow: `0 0 0 1px ${colors.grey[300]}`,
    fontSize: '1rem',
    fontWeight: 400,
    fontFamily: fontFamily,
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),

    '&:focus': {
      boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
    },
  },

  '&.Mui-error': {
    '.MuiInputBase-input': {
      boxShadow: `0 0 0 2px ${colors.red[500]}`,
    },
  },
}));

export default Input;
