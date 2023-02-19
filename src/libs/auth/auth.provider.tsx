import { User, usersService } from '@libs/api';
import { noop } from 'lodash';
import { ReactNode, useState } from 'react';
import { useEffectOnce } from 'react-use';

import { AuthContext } from './auth.context';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authorizing, setAuthorizing] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const authorize = (user: User) => {
    setUser(user);
    localStorage.setItem('userId', `${user.id}`);
  };

  const unauthorize = () => {
    setUser(null);
    localStorage.removeItem('userId');
  };

  const checkPreviousSession = async () => {
    const userId = localStorage.getItem('userId');

    if (userId) {
      usersService
        .findOne(userId)
        .then((response) => {
          const foundUser = response.data;

          if (foundUser) {
            setUser(foundUser);
          }
        })
        .catch(noop)
        .finally(() => {
          setAuthorizing(false);
        });
    } else {
      setAuthorizing(false);
      localStorage.removeItem('userId');
    }
  };

  useEffectOnce(() => {
    checkPreviousSession();
  });

  return (
    <AuthContext.Provider value={{ user, authorize, unauthorize, authorizing }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
