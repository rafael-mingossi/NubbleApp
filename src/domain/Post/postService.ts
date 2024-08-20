import {postApi} from './postApi.ts';
import {Post} from './types.ts';

export async function getList(): Promise<Post[]> {
  const postList = await postApi.getList();
  return postList;
}

export const postService = {
  getList,
};
