import {apiAdapter} from '@api';
import {Post, postAdapter} from '@domain';
import {Page} from '@types';

import {postApi} from './postApi.ts';

async function getList(page: number): Promise<Page<Post>> {
  const postPageAPI = await postApi.getList({page, per_page: 10});
  return {
    data: postPageAPI.data.map(postAdapter.toPost),
    meta: apiAdapter.toMetaDataPage(postPageAPI.meta),
  };
}

export const postService = {
  getList,
};
