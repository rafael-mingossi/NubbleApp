import {apiAdapter} from '@api';
import {User, userAdapter} from '@domain';
import {Page} from '@types';

import {userApi} from './userApi.ts';

async function getById(id: number): Promise<User> {
  const userAPI = await userApi?.getById(id.toString());
  return userAdapter.toUser(userAPI);
}

async function searchUser(search: string): Promise<Page<User>> {
  const userAPIPage = await userApi.getList(search);

  return apiAdapter.toPageModel(userAPIPage, userAdapter.toUser);
}

export const userService = {
  getById,
  searchUser,
};
