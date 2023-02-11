import { User } from '@app/libs/api';
import { noop } from 'lodash';
import { createContext } from 'react';

export interface AuthContextValue {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContextValue>({
  user: null,
  setUser: noop,
});
