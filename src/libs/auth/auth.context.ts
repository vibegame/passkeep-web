import { User } from '@libs/api';
import { noop } from 'lodash';
import { createContext } from 'react';

export interface AuthContextValue {
  user: User | null;
  authorize: (user: User) => void;
  unauthorize: () => void;
  authorizing: boolean;
}

export const AuthContext = createContext<AuthContextValue>({
  user: null,
  authorize: noop,
  unauthorize: noop,
  authorizing: true,
});
