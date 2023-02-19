import { Theme } from '@mui/material';
import { SystemStyleObject } from '@mui/system';

export type StyleObject = SystemStyleObject<Theme>;
export type Style = StyleObject | ((theme: Theme) => StyleObject);
export type SxProps = Style | Style[];
