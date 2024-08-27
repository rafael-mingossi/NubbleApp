import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {userService} from '../userService';

export function useUserGetById(id: number) {
  const {data, isLoading, isError, refetch, isFetching} = useQuery({
    queryKey: [QueryKeys.UserGetById, id],
    queryFn: () => userService.getById(id),
    staleTime: 1000 * 30, //Time that the query remains obsolete, after 30 sec. it will fetch again
    // cacheTime: 5000, //This is related to the loading time, after 5 sec. it will load query again
  });

  return {
    user: data,
    isError,
    isLoading,
    refetch,
    isFetching,
  };
}
