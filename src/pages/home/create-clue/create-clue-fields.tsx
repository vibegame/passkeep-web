import Form from '@libs/form';
import { Icon, Input, mx } from '@libs/ui';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useFieldArray } from 'react-hook-form';
import { IoClose } from 'react-icons/io5';

import { FormValues } from './create-clue.types';

interface ClueFieldsProps {
  name: 'fields';
}

function ClueFields({ name }: ClueFieldsProps) {
  const { remove, fields } = useFieldArray<FormValues>({ name });

  return (
    <Stack spacing={6}>
      {fields.map((field, index) => (
        <mx.div key={field.id}>
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 1 }}
          >
            <Typography fontWeight={500} sx={{ mb: 2 }}>
              Field #{index + 1}
            </Typography>

            {fields.length > 1 && (
              <Tooltip title="Remove">
                <IconButton onClick={() => remove(index)}>
                  <Icon icon={IoClose} />
                </IconButton>
              </Tooltip>
            )}
          </Stack>

          <Stack spacing={2}>
            <Form.Item name={`${name}.${index}.title`}>
              <Input placeholder="Field Name" />
            </Form.Item>

            <Form.Item name={`${name}.${index}.value`}>
              <Input placeholder="Field Value" />
            </Form.Item>

            <Form.Item name={`${name}.${index}.secret`}>
              <FormControlLabel
                label="Private"
                control={<Checkbox sx={{ padding: 0 }} />}
                sx={{ margin: 0, gap: 2 }}
              />
            </Form.Item>
          </Stack>
        </mx.div>
      ))}
    </Stack>
  );
}

export default ClueFields;
