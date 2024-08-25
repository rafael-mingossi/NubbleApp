import {PostComment} from '@domain';
import {usePaginatedList} from '@infra';

import {postCommentService} from '../postCommentService.ts';

export function usePostCommentList(postId: number) {
  function getList(page: number) {
    return postCommentService.getListComments(postId, page);
  }

  return usePaginatedList<PostComment>(getList);
}
