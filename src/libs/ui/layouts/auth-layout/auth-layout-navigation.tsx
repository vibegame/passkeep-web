import { useAuth } from '@libs/auth';
import { createStyles } from '@libs/ui/theme';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { IconType } from 'react-icons';
import {
  IoLockClosed,
  IoLogOutOutline,
  IoSettingsSharp,
} from 'react-icons/io5';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';

import { Icon } from '../../icons';

const NavigationItem = (props: {
  path: string;
  label: string;
  icon: IconType;
}) => {
  const { label, icon, path } = props;
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <MenuItem
      onClick={() => navigate(path)}
      selected={!!matchPath(path, location.pathname)}
    >
      <ListItemIcon>
        <Icon icon={icon} />
      </ListItemIcon>
      {label}
    </MenuItem>
  );
};

export default function AuthLayoutNavigation() {
  const auth = useAuth();

  return (
    <MenuList sx={styles.menuList}>
      <NavigationItem label="Dashboard" path="/" icon={IoLockClosed} />
      <NavigationItem
        label="Settings"
        path="/settings"
        icon={IoSettingsSharp}
      />

      <MenuItem onClick={auth.unauthorize}>
        <ListItemIcon>
          <Icon icon={IoLogOutOutline} />
        </ListItemIcon>
        Log out
      </MenuItem>
    </MenuList>
  );
}

const styles = createStyles({
  menuList: {
    '.MuiMenuItem-root': {
      borderRadius: 2,
      py: 4,
      fontWeight: 500,

      '&:not(:first-child)': {
        mt: 2,
      },
    },
  },
});
