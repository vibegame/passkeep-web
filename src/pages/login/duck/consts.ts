import { InferType, object, string } from 'yup';

export const schema = object({
  email: string().email().required(),
  password: string().required(),
});

export const defaultValues: InferType<typeof schema> = {
  email: '',
  password: '',
};
