import {postListMock} from './postListMock.ts';
import {Post} from './types.ts';

async function getList(): Promise<Post[]> {
  await new Promise(resolve => setTimeout(() => resolve(''), 1500));
  return postListMock;
}

export const postApi = {
  getList,
};
