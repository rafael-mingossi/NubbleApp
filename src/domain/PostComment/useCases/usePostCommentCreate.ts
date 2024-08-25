import {PostComment, postCommentService} from '@domain';
import {MutationOptions, useMutation} from '@infra';

export function usePostCommentCreate(
  postId: number,
  options?: MutationOptions<PostComment>,
) {
  const {loading, error, mutate} = useMutation<{message: string}, PostComment>(
    ({message}) => postCommentService.create(postId, message),
    options,
  );

  async function createComment(message: string) {
    await mutate({message});
  }

  return {
    loading,
    createComment,
    error,
  };
}
