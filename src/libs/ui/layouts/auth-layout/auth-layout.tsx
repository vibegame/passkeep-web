import { logoSrc } from '@app/assets';
import Link from '@mui/material/Link';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';
import {
  IoLockClosed,
  IoLogOutOutline,
  IoSettingsSharp,
} from 'react-icons/io5';
import { matchPath, NavLink, useLocation, useNavigate } from 'react-router-dom';

import { Icon } from '../../icons';
import { mx } from '../../mx';
import { createStyles } from '../../theme';
import { LAYOUT_HEADER_HEIGHT } from './auth-layout.constants';

interface AuthLayoutProps {
  children?: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (to: string) => navigate(to);

  const matchPathname = (url: string) => !!matchPath(url, location.pathname);

  return (
    <mx.div sx={styles.layout}>
      <mx.div sx={{ display: 'flex', height: '100%' }}>
        <mx.aside sx={styles.sider}>
          <mx.div
            sx={{
              display: 'flex',
              justifyContent: 'center',
              py: 8,
            }}
          >
            <Link sx={styles.logoLink} component={NavLink} to="/">
              <mx.img src={logoSrc} alt="Header Logo" sx={{ height: 24 }} />

              <Typography fontWeight={600} fontSize="1.4rem" color={'#ffffff'}>
                Passkeep
              </Typography>
            </Link>
          </mx.div>

          <MenuList
            sx={{
              '.MuiMenuItem-root': {
                borderRadius: 2,
                py: 4,
                fontWeight: 500,

                '&.Mui-selected': {
                  bgcolor: '#2B294A',
                },

                '&:not(:first-child)': {
                  mt: 2,
                },
              },
            }}
          >
            <MenuItem
              onClick={() => handleNavigate('/')}
              selected={matchPathname('/')}
            >
              <ListItemIcon>
                <Icon icon={IoLockClosed} />
              </ListItemIcon>
              Passwords
            </MenuItem>

            <MenuItem
              onClick={() => handleNavigate('/settings')}
              selected={matchPathname('/settings')}
            >
              <ListItemIcon>
                <Icon icon={IoSettingsSharp} />
              </ListItemIcon>
              Settings
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <Icon icon={IoLogOutOutline} />
              </ListItemIcon>
              Log out
            </MenuItem>
          </MenuList>
        </mx.aside>

        <mx.main sx={styles.content}>{children}</mx.main>
      </mx.div>
    </mx.div>
  );
}

const styles = createStyles({
  layout: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  content: {
    px: 8,
    pt: 8,
    width: '100%',
    borderLeft: 'solid 1px rgba(0, 0, 0, 0.1)',
  },
  sider: (theme) => ({
    width: 360,
    px: 8,
    bgcolor: theme.palette.background.paper,
  }),
  logoLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 2,
    cursor: 'pointer',
    textDecoration: 'none',
  },
  header: {
    height: LAYOUT_HEADER_HEIGHT,
    px: 4,
    width: '100%',
    boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)',
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  avatar: {
    cursor: 'pointer',
    ml: 'auto',
  },
});
