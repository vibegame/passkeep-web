import apiClient from '../../api-client';
import { User } from '../../types';

const usersService = {
  findOne(id: string) {
    return apiClient.get<User>(`/users/${id}`);
  },
};

export default usersService;
