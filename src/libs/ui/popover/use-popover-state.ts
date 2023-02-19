import { MouseEventHandler, useMemo, useState } from 'react';

export default function usePopoverState() {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  const triggerClick: MouseEventHandler<any> = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => setAnchorEl(null);

  return useMemo(
    () => ({
      open: !!anchorEl,
      anchorEl,
      onClose,
      triggerClick,
    }),
    [anchorEl],
  );
}
