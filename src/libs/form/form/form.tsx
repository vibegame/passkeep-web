import { mx } from '@libs/ui/mx';
import { FieldValues, FormProvider, SubmitHandler } from 'react-hook-form';

import FormButton from '../form-button';
import FormItem from '../form-item';
import { FormProps } from './form.types';

const Form = <TFieldValues extends FieldValues, TContext = any>({
  form,
  children,
  onSubmit,
  name,
  sx,
}: FormProps<TFieldValues, TContext>) => {
  const submitHandler: SubmitHandler<TFieldValues> = async (values) => {
    try {
      await onSubmit(values);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <FormProvider {...form}>
      <mx.form name={name} onSubmit={form.handleSubmit(submitHandler)} sx={sx}>
        {children}
      </mx.form>
    </FormProvider>
  );
};

Form.Item = FormItem;
Form.Button = FormButton;

export default Form;
