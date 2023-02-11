import { yupResolver } from '@hookform/resolvers/yup';
import type { FieldValues } from 'react-hook-form';
import { useForm as useFormNative } from 'react-hook-form';

import { UseFormProps } from './types';

const useForm = <TFieldValues extends FieldValues = FieldValues>({
  validationSchema,
  ...rest
}: UseFormProps<TFieldValues> = {}) => {
  return useFormNative<TFieldValues, any>({
    mode: 'onChange',
    resolver: validationSchema ? yupResolver(validationSchema) : undefined,
    ...rest,
  });
};

export default useForm;
