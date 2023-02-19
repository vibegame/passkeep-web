import { AxiosError } from 'axios';

import { apiClient } from '../../api-client';
import { User } from '../../types';

export const authService = {
  async login(email: string, password: string) {
    const users = (
      await apiClient.get<User[]>('/users', {
        params: {
          email,
          password,
        },
      })
    ).data;

    if (users.length === 0) {
      const error = new AxiosError('Email or password is incorrect', '401');

      error.status = 401;

      throw error;
    }

    const user = users[0];

    return user;
  },
};
