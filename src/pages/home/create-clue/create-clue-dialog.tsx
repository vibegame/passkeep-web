import { clueFieldsService, cluesService } from '@libs/api';
import { useUser } from '@libs/auth';
import Form, { useForm } from '@libs/form';
import { Icon } from '@libs/ui/icons';
import { Input } from '@libs/ui/inputs';
import { mx } from '@libs/ui/mx';
import { createStyles } from '@libs/ui/theme';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { FormProvider, useFormState } from 'react-hook-form';
import { IoAdd } from 'react-icons/io5';
import { v4 } from 'uuid';

import { defaultValues, validationSchema } from './create-clue.form';
import { Field, FormValues } from './create-clue.types';
import ClueFields from './create-clue-fields';

interface CreateClueDialogProps {
  opened: boolean;
  onClose: () => void;
}

export function CreateClueDialog({ opened, onClose }: CreateClueDialogProps) {
  const queryClient = useQueryClient();
  const user = useUser();
  const form = useForm({
    defaultValues: defaultValues,
    validationSchema: validationSchema,
  });
  const formState = useFormState({
    control: form.control,
  });
  const formRef = useRef<HTMLFormElement>(null);

  const execSubmit = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event('submit', { cancelable: true, bubbles: true }),
      );
    }
  };

  const createEmptyField = (): Field => ({
    title: '',
    value: '',
    secret: false,
  });

  const onSubmit = async (values: FormValues) => {
    const createdClue = await cluesService
      .createOne({
        id: v4(),
        title: values.title,
        userId: user.id,
      })
      .then((r) => r.data);

    await Promise.all(
      values.fields.map((field) =>
        clueFieldsService.createOne({
          id: v4(),
          title: field.title,
          value: field.value,
          secret: field.secret,
          clueId: createdClue.id,
        }),
      ),
    );

    await queryClient.invalidateQueries(['clues']);

    onClose();
  };

  return (
    <FormProvider {...form}>
      <Dialog
        open={opened}
        onClose={onClose}
        PaperProps={{ sx: styles.dialogPaper }}
        TransitionProps={{
          onExited: () => {
            form.reset();
          },
        }}
      >
        <DialogTitle>New Clue</DialogTitle>

        <DialogContent sx={{ py: 2 }}>
          <mx.form ref={formRef} onSubmit={form.handleSubmit(onSubmit)}>
            <Form.Item name="title" control={form.control} sx={{ mb: 6 }}>
              <Input placeholder="Clue's name" />
            </Form.Item>

            <ClueFields name="fields" />

            <Button
              startIcon={<Icon icon={IoAdd} />}
              sx={styles.newFieldBtn}
              onClick={() => {
                form.setValue('fields', [
                  ...form.getValues().fields,
                  createEmptyField(),
                ]);
              }}
              disabled={formState.isSubmitting}
            >
              New field
            </Button>
          </mx.form>
        </DialogContent>
        <DialogActions>
          <Form.Button onClick={onClose} disabled={formState.isSubmitting}>
            Cancel
          </Form.Button>
          <Form.Button
            onClick={() => {
              execSubmit();
            }}
            variant="gradient"
            disabled={formState.isSubmitting || !formState.isValid}
          >
            Save
          </Form.Button>
        </DialogActions>
      </Dialog>
    </FormProvider>
  );
}

const styles = createStyles({
  dialogPaper: {
    width: '100%',
    maxWidth: 500,
  },
  newFieldBtn: {
    mt: 4,
  },
});
