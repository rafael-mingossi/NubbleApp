import {PageAPI} from '@api';

import {api} from '../../api/apiInstance';

import {UserAPI, UpdateUserParams} from './userTypes';

export const USER_PATH = 'users';

async function getById(userId: string): Promise<UserAPI> {
  const response = await api.get<UserAPI>(`${USER_PATH}/${userId}`);
  return response.data;
}

async function getList(search: string): Promise<PageAPI<UserAPI>> {
  const response = await api.get<PageAPI<UserAPI>>(`${USER_PATH}`, {
    params: {search},
  });

  return response.data;
}

async function isFollowing(userId: string): Promise<{isFollowing: boolean}> {
  const response = await api.get<{isFollowing: boolean}>(
    `user/follow/is-following/${userId}`,
  );
  return response.data;
}

async function updateUser(params: UpdateUserParams): Promise<UserAPI> {
  const response = await api.put<UserAPI>(`${USER_PATH}`, params);

  return response.data;
}

export const userApi = {
  getById,
  getList,
  isFollowing,
  updateUser,
};
