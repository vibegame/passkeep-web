import { cluesService } from '@libs/api';
import { useDialogState } from '@libs/ui/dialogs';
import { Icon } from '@libs/ui/icons';
import { AuthLayout } from '@libs/ui/layouts';
import { mx } from '@libs/ui/mx';
import { createStyles } from '@libs/ui/theme';
import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { IoAddCircleOutline } from 'react-icons/io5';

import { ClueCard } from './clue-card';
import { CreateClueDialog } from './create-clue';
import { CLUE_CARD_HEIGHT } from './home.constants';
import { SearchInput } from './search';

const HomePage = () => {
  const [search, setSearch] = useState('');
  const dialogState = useDialogState();

  const queryClues = useQuery(['clues'], () => {
    return cluesService.findAll().then((r) => r.data);
  });

  return (
    <AuthLayout>
      <SearchInput value={search} onChange={setSearch} />

      <mx.div sx={{ mt: 4 }}>
        <Grid container spacing={6}>
          {queryClues.data
            ?.filter((clue) => clue.title.toLowerCase().includes(search))
            .map((clue) => (
              <Grid key={clue.title} xs={12} sm={6} md={4} xl={2} item>
                <ClueCard
                  id={clue.id}
                  title={clue.title}
                  fields={clue.clueFields}
                />
              </Grid>
            ))}

          <Grid xs={12} sm={6} md={4} xl={2} item>
            <ButtonBase sx={styles.newClueCard} onClick={dialogState.open}>
              <Icon icon={IoAddCircleOutline} size={20} />
              <Typography ml={2}>New clue</Typography>
            </ButtonBase>
          </Grid>
        </Grid>
      </mx.div>

      <CreateClueDialog
        opened={dialogState.opened}
        onClose={dialogState.onClose}
      />
    </AuthLayout>
  );
};

const styles = createStyles({
  newClueCard: (theme) => ({
    width: '100%',
    borderRadius: 2,
    fontFamily: theme.typography.fontFamily,
    border: `dashed 1px white`,
    color: 'white',
    height: CLUE_CARD_HEIGHT,
  }),
});

export default HomePage;
