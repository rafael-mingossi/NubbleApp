import {userService} from '@domain';
import {QueryKeys, usePaginatedList} from '@infra';

export function useUserSearch(search: string) {
  return usePaginatedList([QueryKeys.UserList, search], () =>
    userService.searchUser(search),
  );
}
