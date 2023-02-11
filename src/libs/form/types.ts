import { SxProps } from '@mui/material/styles';
import { FieldValues, UseFormReturn } from 'react-hook-form';

export type FormSubmit<TFieldValues> = (values: TFieldValues) => any;

export interface FormProps<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
> {
  children: React.ReactNode;
  form: UseFormReturn<TFieldValues, TContext>;
  onSubmit: FormSubmit<TFieldValues>;
  name?: string;
  sx?: SxProps;
}
