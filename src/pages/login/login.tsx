import { authService } from '@app/libs/api';
import { useAuth } from '@app/libs/auth';
import Form, { useForm } from '@app/libs/form';
import { Input } from '@app/libs/ui';
import { mx } from '@app/libs/ui/mx';
import { Grid, Link, Typography } from '@mui/material';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';
import { NavLink } from 'react-router-dom';

import { consts, styles } from './duck';

const LoginPage = () => {
  const auth = useAuth();
  const snackbar = useSnackbar();
  const form = useForm({
    defaultValues: consts.defaultValues,
    validationSchema: consts.schema,
  });

  return (
    <>
      <mx.div sx={styles.layout}>
        <mx.div sx={styles.formContainer}>
          <Typography variant="h3" sx={styles.title}>
            Log In
          </Typography>

          <Form
            form={form}
            onSubmit={async (values) => {
              try {
                const user = await authService.login(
                  values.email,
                  values.password,
                );

                auth.setUser(user);
              } catch (error) {
                if (error instanceof AxiosError) {
                  snackbar.enqueueSnackbar(error.message, { variant: 'error' });
                }
              }
            }}
          >
            <Grid container rowSpacing={4}>
              <Grid xs={12} item>
                <Form.Item
                  label="Email"
                  control={form.control}
                  name="email"
                  required
                >
                  <Input />
                </Form.Item>
              </Grid>

              <Grid xs={12} item>
                <Form.Item
                  label="Password"
                  control={form.control}
                  name="password"
                  required
                >
                  <Input type="password" />
                </Form.Item>
              </Grid>
            </Grid>

            <Form.Button
              sx={styles.submitBtn}
              type="submit"
              variant="contained"
              fullWidth
            >
              Login
            </Form.Button>

            <Link
              component={NavLink}
              to="/forgot-password"
              sx={{ display: 'inline-block', mt: 4, textDecoration: 'none' }}
            >
              Forgot password?
            </Link>
          </Form>
        </mx.div>
      </mx.div>
    </>
  );
};

export default LoginPage;
