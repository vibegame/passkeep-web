import { apiClient } from '../../api-client';
import { User } from '../../types';

export const usersService = {
  findOne(id: string) {
    return apiClient.get<User>(`/users/${id}`);
  },
};
