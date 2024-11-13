import {apiAdapter} from '@api';
import {Page} from '@types';

import {postCommentAdapter} from '../PostComment/postCommentAdapter';
import {PostComment} from '../PostComment/postCommentTypes';

import {postCommentApi} from './postCommentApi.ts';

const PER_PAGE = 10;

async function getListComments(
  postId: number,
  page: number,
): Promise<Page<PostComment>> {
  const postCommentPageAPI = await postCommentApi.getList(postId, {
    page,
    per_page: PER_PAGE,
  });

  return apiAdapter.toPageModel(
    postCommentPageAPI,
    postCommentAdapter.toPostComment,
  );

  //Before the toPageModel above was implemented
  // return {
  //   data: postCommentPageAPI.data.map(postCommentAdapter.toPostComment),
  //   meta: apiAdapter.toMetaDataPage(postCommentPageAPI.meta),
  // };
}

async function create(postId: number, message: string): Promise<PostComment> {
  const postCommentAPI = await postCommentApi.create(postId, message);

  return postCommentAdapter.toPostComment(postCommentAPI);
}

async function remove(postCommentId: number): Promise<string> {
  const response = await postCommentApi.remove(postCommentId);

  return response.message;
}

/**
 * @description User can delete a comment if he is the owner of the comment
 *
 * @param userId the current session user id
 * @param postComment comment to be deleted
 * @param postAuthorId the id of the post author
 */
function isAllowedToDelete(
  postComment: PostComment,
  userId: number | null,
  postAuthorId: number,
): boolean {
  if (postComment.author.id === userId) {
    return true;
  }

  if (postAuthorId === userId) {
    return true;
  }

  return false;
}

export const postCommentService = {
  getListComments,
  create,
  remove,
  isAllowedToDelete,
};
