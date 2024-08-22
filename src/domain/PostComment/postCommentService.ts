import {apiAdapter} from '@api';
import {PostComment, postCommentAdapter} from '@domain';
import {Page} from '@types';

import {postCommentApi} from './postCommentApi.ts';

const PER_PAGE = 10;

export async function getList(
  postId: number,
  page: number,
): Promise<Page<PostComment>> {
  const postCommentPageAPI = await postCommentApi.getList(postId, {
    page,
    per_page: PER_PAGE,
  });
  return {
    data: postCommentPageAPI.data.map(postCommentAdapter.toPostComment),
    meta: apiAdapter.toMetaDataPage(postCommentPageAPI.meta),
  };
}

export const postCommentService = {
  getList,
};
