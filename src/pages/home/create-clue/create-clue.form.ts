import { array, boolean, object, string } from 'yup';

import { FormValues } from './create-clue.types';

export const fieldSchema = object({
  title: string().required(),
  value: string().required(),
  secret: boolean().required(),
});

export const validationSchema = object({
  title: string().required(),
  fields: array(fieldSchema.required()).required(),
});

export const defaultValues: FormValues = {
  title: '',
  fields: [
    {
      title: 'Username',
      value: '',
      secret: false,
    },
    {
      title: 'Password',
      value: '',
      secret: true,
    },
  ],
};
