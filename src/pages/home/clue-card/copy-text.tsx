import { Icon } from '@libs/ui/icons';
import { mx } from '@libs/ui/mx';
import { colors } from '@libs/ui/theme';
import { IconButton, Tooltip, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import {
  IoCheckmark,
  IoCopyOutline,
  IoEyeOffOutline,
  IoEyeOutline,
} from 'react-icons/io5';

interface CopyTextProps {
  text: string;
  label: string;
  secret: boolean;
}

export default function CopyText({ text, label, secret }: CopyTextProps) {
  const timerId = useRef<number>();
  const [copied, setCopied] = useState(false);
  const [hidden, setHidden] = useState(true);

  const onCopy = () => {
    window.navigator.clipboard.writeText(text);

    setCopied(true);

    if (timerId.current) {
      window.clearTimeout(timerId.current);
      timerId.current = undefined;
    }

    timerId.current = window.setTimeout(() => {
      setCopied(false);
      timerId.current = undefined;
    }, 500);
  };

  const onToggleHidden = () => {
    setHidden(!hidden);
  };

  return (
    <mx.div sx={{ display: 'inline-flex', alignItems: 'center' }}>
      <Tooltip title={label}>
        <Typography>{secret && hidden ? '******' : text}</Typography>
      </Tooltip>

      <mx.div sx={{ ml: 1 }}>
        {secret &&
          (hidden ? (
            <IconButton onClick={onToggleHidden}>
              <Icon icon={IoEyeOutline} />
            </IconButton>
          ) : (
            <IconButton onClick={onToggleHidden}>
              <Icon icon={IoEyeOffOutline} />
            </IconButton>
          ))}

        <IconButton onClick={onCopy}>
          {copied ? (
            <Icon icon={IoCheckmark} sx={{ color: colors.purple[100] }} />
          ) : (
            <Icon icon={IoCopyOutline} />
          )}
        </IconButton>
      </mx.div>
    </mx.div>
  );
}
