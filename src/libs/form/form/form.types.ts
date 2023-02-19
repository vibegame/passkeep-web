import { SxProps } from '@mui/material/styles';
import { FieldPath, FieldValues, UseFormReturn } from 'react-hook-form';
import { InferType, ObjectSchema } from 'yup';

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

export type FormName<Schema extends ObjectSchema<any>> = FieldPath<
  InferType<Schema>
>;
