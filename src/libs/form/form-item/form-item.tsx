import { colors } from '@app/libs/ui';
import Collapse from '@mui/material/Collapse';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import { isFunction } from 'lodash';
import { cloneElement, ReactElement, ReactNode } from 'react';
import {
  Control,
  FieldPath,
  FieldValues,
  useController,
  UseControllerReturn,
} from 'react-hook-form';

import { styles } from './duck';

interface FormItemProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  name: TName;
  control: Control<TFieldValues>;
  children:
    | ReactElement
    | ((controller: UseControllerReturn<TFieldValues, TName>) => ReactElement);
  label?: ReactNode;
  required?: boolean;
  fullWidth?: boolean;
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
}: FormItemProps<TFieldValues, TName>) => {
  const controller = useController({ name, control });
  const { fieldState } = controller;
  const { isTouched, error: fieldError } = fieldState;
  const error = isTouched ? fieldError?.message : undefined;

  return (
    <FormControl error={!!error} fullWidth={fullWidth}>
      {label && (
        <FormLabel sx={{ mb: 2, fontWeight: 500, fontSize: 14 }}>
          {required && (
            <>
              <Typography
                component="span"
                color={colors.red[600]}
                fontWeight={700}
              >
                *
              </Typography>{' '}
            </>
          )}
          {label}
        </FormLabel>
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

export default FormItem;
