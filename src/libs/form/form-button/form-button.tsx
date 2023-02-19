import Button, { ButtonProps } from '@mui/material/Button';
import { useFormState } from 'react-hook-form';

export default function FormButton(props: ButtonProps) {
  const { isSubmitting } = useFormState();

  return <Button {...props} disabled={isSubmitting || props.disabled} />;
}
