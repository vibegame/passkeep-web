import { createStyles, SxProps } from '@libs/ui/theme';
import Collapse from '@mui/material/Collapse';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { isFunction } from 'lodash';
import { cloneElement, ReactElement, ReactNode } from 'react';
import {
  Control,
  FieldPath,
  FieldValues,
  useController,
  UseControllerReturn,
} from 'react-hook-form';

import FormItemLabel from './form-item-label';

interface FormItemProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  name: TName;
  control?: Control<TFieldValues>;
  children:
    | ReactElement
    | ((controller: UseControllerReturn<TFieldValues, TName>) => ReactElement);
  label?: ReactNode;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
}

const FormItem = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  control,
  children,
  label,
  required,
  fullWidth = true,
  sx,
}: FormItemProps<TFieldValues, TName>) => {
  const controller = useController({ name, control });
  const { fieldState, formState } = controller;
  const { isSubmitting } = formState;
  const { isTouched, error: fieldError } = fieldState;
  const error = isTouched ? fieldError?.message : undefined;

  return (
    <FormControl
      error={!!error}
      fullWidth={fullWidth}
      disabled={isSubmitting}
      sx={sx}
    >
      {!!label && (
        <FormItemLabel required={required} sx={{ mb: 2 }}>
          {label}
        </FormItemLabel>
      )}

      {isFunction(children)
        ? children(controller)
        : cloneElement(children, {
            ...controller.field,
            ...children.props,
          })}

      <Collapse in={!!error} collapsedSize={0} timeout={150}>
        {!!error && (
          <FormHelperText sx={styles.formHelperText}>{error}</FormHelperText>
        )}
      </Collapse>
    </FormControl>
  );
};

const styles = createStyles({
  formHelperText: {
    height: 24,
    lineHeight: '24px',
    margin: '3px 0 0 0',
  },
});

export default FormItem;
