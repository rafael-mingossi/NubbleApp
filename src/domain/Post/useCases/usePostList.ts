import {useEffect, useState} from 'react';

import {Post, postService} from '@domain';

export function usePostList() {
  const [postList, setPostList] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  async function fetchNextPage() {
    //BY ADDING THIS CONDITION WE AVOID CALLING THE API 2xTIMES BECAUSE OF OnEndREACH IN FLAT-LIST
    if (loading || !hasNextPage) {
      return;
    }

    try {
      setLoading(true);
      const {data, meta} = await postService.getList(page);
      setPostList(prev => [...prev, ...data]);
      if (meta.hasNextPage) {
        setPage(prev => prev + 1);
      } else {
        setHasNextPage(false);
      }
    } catch (e) {
      console.log('FETCH NEXT PAGE =>', e);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  async function fetchInitialData() {
    try {
      setError(null);
      setLoading(true);
      const {data, meta} = await postService.getList(1);
      if (meta.hasNextPage) {
        setPage(2);
        setHasNextPage(true);
      } else {
        setHasNextPage(false);
      }
      setPostList(data);
    } catch (e) {
      setError(true);
      console.log('FETCH INITIAL DATA => ', e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchInitialData().then(() => {});
  }, []);

  return {
    loading,
    error,
    refresh: fetchInitialData,
    postList,
    fetchNextPage,
  };
}
