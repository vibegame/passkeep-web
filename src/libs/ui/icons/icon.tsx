import { SxProps } from '@libs/ui/theme';
import { useMemo } from 'react';
import { IconBaseProps, IconType } from 'react-icons';

import { styled } from '../theme';

interface IconProps extends IconBaseProps {
  icon: IconType;
  sx?: SxProps;
}

export default function Icon({ icon, ...rest }: IconProps) {
  const Component = useMemo(() => styled(icon)``, [icon]);

  return <Component {...rest} />;
}
