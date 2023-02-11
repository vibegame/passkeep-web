import {
  FieldValues,
  UseFormProps as UseFormNativeProps,
} from 'react-hook-form';

export interface UseFormProps<TFieldValues extends FieldValues = FieldValues>
  extends UseFormNativeProps<TFieldValues> {
  validationSchema?: any;
}
