import { FieldPath } from 'react-hook-form';
import { InferType, ObjectSchema } from 'yup';

export type FormName<Schema extends ObjectSchema<any>> = FieldPath<
  InferType<Schema>
>;
