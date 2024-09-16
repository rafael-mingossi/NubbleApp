import {userService} from '@domain';
import {QueryKeys, usePaginatedList} from '@infra';

export function useUserSearch(search: string) {
  return usePaginatedList(
    [QueryKeys.UserList, search],
    () => userService.searchUser(search),
    {
      enabled: search.length > 0, //This will avoid the initial list being rendered
      staleTime: 30000,
    },
  );
}
