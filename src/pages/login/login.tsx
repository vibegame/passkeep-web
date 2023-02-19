import { mx } from '@libs/ui/mx';
import { colors, createStyles } from '@libs/ui/theme';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/system';

import LoginForm from './login-form';

const LoginPage = () => {
  return (
    <>
      <mx.div sx={styles.layout}>
        <Paper sx={styles.formWrapper}>
          <mx.div sx={styles.formContainer}>
            <Typography variant="h3" sx={styles.title}>
              Log In
            </Typography>

            <LoginForm />
          </mx.div>
        </Paper>
      </mx.div>
    </>
  );
};

const styles = createStyles({
  layout: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formWrapper: (theme) => ({
    width: 500,
    ...(theme.palette.mode === 'dark' && {
      bgcolor: theme.palette.background.default,
      boxShadow: `0px 0px 14px 6px ${alpha(colors.purple[600], 0.4)}`,
    }),
  }),
  formContainer: { px: 8, py: 12 },
  title: { pb: 4 },
});

export default LoginPage;
