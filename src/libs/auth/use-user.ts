import useAuth from './use-auth';

export default function useUser() {
  const auth = useAuth();

  if (auth.user) {
    return auth.user;
  }

  throw new Error('The user is not logged in');
}
