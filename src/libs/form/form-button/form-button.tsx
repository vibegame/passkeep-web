import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton';
import { useFormState } from 'react-hook-form';

export default function FormButton(props: LoadingButtonProps) {
  const { isSubmitting } = useFormState();

  return (
    <LoadingButton
      {...props}
      loading={
        typeof props.loading === 'boolean' ? props.loading : isSubmitting
      }
      loadingPosition="end"
    />
  );
}
