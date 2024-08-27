import {PostComment} from '@domain';
import {QueryKeys, usePaginatedList} from '@infra';

import {postCommentService} from '../postCommentService.ts';

export function usePostCommentList(postId: number) {
  function getList(page: number) {
    return postCommentService.getListComments(postId, page);
  }

  return usePaginatedList<PostComment>([QueryKeys.PostCommentList], getList);
}
