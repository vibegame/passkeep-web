import { SxProps } from './types';

interface Styles {
  [key: string]: SxProps;
}

export const createStyles = <T extends Styles>(styles: T) => styles;
