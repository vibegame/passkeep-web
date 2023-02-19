import { authService } from '@libs/api';
import { useAuth } from '@libs/auth';
import Form, { useForm } from '@libs/form';
import { Input } from '@libs/ui/inputs';
import { createStyles } from '@libs/ui/theme';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';
import { NavLink, useNavigate } from 'react-router-dom';
import { object, string } from 'yup';

import { FormValues } from './login.types';

export default function LoginForm() {
  const auth = useAuth();
  const snackbar = useSnackbar();
  const navigate = useNavigate();
  const form = useForm<FormValues>({ defaultValues, validationSchema });

  const onSubmit = async (values: FormValues) => {
    try {
      const user = await authService.login(values.email, values.password);

      auth.authorize(user);
      navigate('/');
    } catch (error) {
      if (error instanceof AxiosError) {
        snackbar.enqueueSnackbar(error.message, {
          variant: 'error',
        });
      }
    }
  };

  return (
    <Form form={form} onSubmit={onSubmit}>
      <Grid container rowSpacing={4}>
        <Grid xs={12} item>
          <Form.Item label="Email" control={form.control} name="email" required>
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
        variant="gradient"
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
  );
}

const styles = createStyles({
  submitBtn: { mt: 4 },
});

const validationSchema = object({
  email: string().email().required(),
  password: string().required(),
});

const defaultValues: FormValues = {
  email: '',
  password: '',
};
