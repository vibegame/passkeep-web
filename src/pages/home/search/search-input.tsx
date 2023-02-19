import { Icon } from '@libs/ui/icons';
import { createStyles } from '@libs/ui/theme';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { IoClose, IoSearch } from 'react-icons/io5';

interface SearchInputProps {
  onChange: (v: string) => void;
  value: string;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <InputBase
      placeholder="Search"
      value={value}
      onChange={(event) => onChange(event.currentTarget.value)}
      sx={styles.root}
      startAdornment={<Icon icon={IoSearch} sx={styles.startAdornment} />}
      endAdornment={
        value ? (
          <IconButton size="small" onClick={() => onChange('')}>
            <Icon icon={IoClose} sx={styles.startAdornment} />
          </IconButton>
        ) : undefined
      }
    />
  );
}

const styles = createStyles({
  root: (theme) => ({
    display: 'inline-flex',
    gap: 3,
    borderRadius: 1,
    px: 4,
    alignItems: 'center',
    width: 350,
    height: 48,
    transition: theme.transitions.create(['border-color']),
    bgcolor: theme.palette.background.paper,

    '&.Mui-focused': {
      borderColor: theme.palette.primary.main,
    },
  }),
  startAdornment: {
    flex: 'none',
  },
});
