import { cluesService } from '@libs/api';
import { Icon } from '@libs/ui/icons';
import { usePopoverState } from '@libs/ui/popover';
import { createStyles } from '@libs/ui/theme';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useQueryClient } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';
import { IoEllipsisVertical } from 'react-icons/io5';

import { CLUE_CARD_HEIGHT } from '../home.constants';
import CopyText from './copy-text';

interface ClueCardProps {
  id: string;
  title: string;
  fields: {
    title: string;
    value: string;
    secret: boolean;
  }[];
}

export function ClueCard({ id, title, fields }: ClueCardProps) {
  const queryClient = useQueryClient();
  const popoverState = usePopoverState();
  const snackbar = useSnackbar();

  const onDelete = async () => {
    await cluesService.deleteOne(id);
    await queryClient.invalidateQueries(['clues']);

    snackbar.enqueueSnackbar('Deleted successfully', {
      variant: 'success',
    });
  };

  const onEdit = () => {
    snackbar.enqueueSnackbar('Updated successfully', {
      variant: 'success',
    });
  };

  return (
    <Paper sx={styles.root}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6">{title}</Typography>

        <IconButton onClick={popoverState.triggerClick}>
          <Icon icon={IoEllipsisVertical} />
        </IconButton>

        <Menu
          open={popoverState.open}
          onClose={popoverState.onClose}
          anchorEl={popoverState.anchorEl}
        >
          <MenuItem
            onClick={() => {
              popoverState.onClose();
              onEdit();
            }}
          >
            Edit
          </MenuItem>
          <MenuItem
            onClick={() => {
              popoverState.onClose();
              onDelete();
            }}
          >
            Delete
          </MenuItem>
        </Menu>
      </Stack>

      <Stack gap={1} mt={3} alignItems="flex-start">
        {fields.map((field) => {
          return (
            <CopyText
              key={field.title}
              label={field.title}
              text={field.value}
              secret={field.secret}
            />
          );
        })}
      </Stack>
    </Paper>
  );
}

const styles = createStyles({
  root: (theme) => ({
    position: 'relative',
    padding: theme.spacing(3, 5),
    width: '100%',
    height: CLUE_CARD_HEIGHT,
  }),
});
