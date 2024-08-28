import {api} from '@api';

import {UserAPI} from './userTypes';

export const USER_PATH = 'users';

async function getById(userId: string): Promise<UserAPI> {
  const response = await api.get<UserAPI>(`${USER_PATH}/${userId}`);
  return response.data;
}

export const userApi = {
  getById,
};
