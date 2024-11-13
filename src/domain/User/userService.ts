import {apiAdapter} from '@api';
import {User, userAdapter, UserDetails} from '@domain';
import {Page} from '@types';

import {userApi} from './userApi.ts';

async function getById(id: number): Promise<UserDetails> {
  const userAPI = await userApi?.getById(id.toString());
  const {isFollowing} = await userApi.isFollowing(id.toString());
  return userAdapter.toUserDetails(userAPI, isFollowing);
}

async function searchUser(search: string): Promise<Page<User>> {
  const userAPIPage = await userApi.getList(search);

  return apiAdapter.toPageModel(userAPIPage, userAdapter.toUser);
}

export const userService = {
  getById,
  searchUser,
};
