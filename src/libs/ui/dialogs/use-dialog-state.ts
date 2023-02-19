import { useState } from 'react';

export function useDialogState() {
  const [opened, setOpened] = useState(false);
  const close = () => setOpened(false);
  const open = () => setOpened(true);
  const onClose = () => close();

  return { opened, open, close, onClose };
}
