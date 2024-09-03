import {userApi, User, userAdapter} from '@domain';

async function getById(id: number): Promise<User> {
  const userAPI = await userApi.getById(id.toString());
  return userAdapter.toUser(userAPI);
}

export const userService = {
  getById,
};
