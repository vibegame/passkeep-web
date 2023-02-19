import { SxProps } from '@libs/ui';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import * as React from 'react';

interface FormItemLabelProps {
  required?: boolean;
  children: React.ReactNode;
  sx?: SxProps;
}

export default function FormItemLabel({
  required,
  children,
  sx,
}: FormItemLabelProps) {
  return (
    <FormLabel sx={sx}>
      {required && (
        <>
          <Typography component="span" color="error" fontWeight={700}>
            *
          </Typography>{' '}
        </>
      )}
      {children}
    </FormLabel>
  );
}
