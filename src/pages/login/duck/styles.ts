import { sxx } from '@app/libs/ui';

export const layout = sxx({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const formContainer = sxx({
  width: 600,
  px: 8,
  py: 12,
  boxShadow: '0px 1px 4px rgba(42, 28, 99, 0.2)',
  borderRadius: 2,
});

export const title = sxx({
  paddingBottom: 4,
});

export const submitBtn = sxx({
  marginTop: 4,
});
