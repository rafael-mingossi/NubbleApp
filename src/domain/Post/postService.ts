import {apiAdapter} from '@api';
import {ImageForUpload} from '@services';
import {Page} from '@types';

import {postAdapter} from './postAdapter.ts';
import {postApi} from './postApi.ts';
import {Post} from './postTypes.ts';

async function getList(page: number, userId?: number): Promise<Page<Post>> {
  const postPageAPI = await postApi.getList({
    page,
    per_page: 10,
    userId: userId,
  });

  return apiAdapter.toPageModel(postPageAPI, postAdapter.toPost);
}

async function createPost(
  text: string,
  imageCover: ImageForUpload,
): Promise<Post> {
  const postApiData = await postApi.createPost(text, imageCover);
  return postAdapter.toPost(postApiData);
}

async function getById(postId: number): Promise<Post> {
  // eslint-disable-next-line testing-library/no-await-sync-queries
  const postApiData = await postApi.getById(postId.toString());
  return postAdapter.toPost(postApiData);
}

export const postService = {
  getList,
  createPost,
  getById,
};
