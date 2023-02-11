import * as yup from 'yup';

import { validationMessages } from './validation-messages';

yup.setLocale({
  mixed: {
    required: validationMessages.required(),
  },
  string: {
    email: validationMessages.email(),
  },
});
