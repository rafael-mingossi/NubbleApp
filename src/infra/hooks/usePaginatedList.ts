import {useEffect, useState} from 'react';

import {useInfiniteQuery} from '@tanstack/react-query';
import {Page} from '@types';

interface UsePaginatedListResult<TData> {
  list: TData[];
  isError: boolean | null;
  isLoading: boolean;
  refresh: () => void;
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

//These options are for the Search User, to avoid the initial users during first render
interface PaginatedListOptions {
  /**
   * Set this to `false` to disable automatic refetching when the query mounts or changes query keys.
   */
  enabled?: boolean;
  /**
   * The time in milliseconds after data is considered stale (invalid).
   */
  staleTime?: number;
}

export function usePaginatedList<Data>(
  queryKey: readonly unknown[],
  getList: (page: number) => Promise<Page<Data>>,
  options?: PaginatedListOptions,
): UsePaginatedListResult<Data> {
  const [list, setList] = useState<Data[]>([]);

  const query = useInfiniteQuery({
    queryKey,
    queryFn: ({pageParam = 1}) => getList(pageParam),
    getNextPageParam: ({meta}) =>
      meta.hasNextPage ? meta.currentPage + 1 : undefined,
    enabled: options?.enabled,
    staleTime: options?.staleTime,
  });

  useEffect(() => {
    if (query.data) {
      //This will create the new list of data when there is more than one page
      const newList = query.data.pages.reduce<Data[]>((prev, curr) => {
        return [...prev, ...curr.data];
      }, []);
      setList(newList);
    }
  }, [query.data]);

  return {
    isLoading: query.isLoading,
    isError: query.isError,
    refresh: query.refetch,
    list,
    fetchNextPage: query.fetchNextPage,
    hasNextPage: !!query.hasNextPage,
  };
}
