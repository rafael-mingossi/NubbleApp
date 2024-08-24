import {useState} from 'react';

import {PostComment, postCommentService} from '@domain';

interface Options {
  onSuccess?: (data: PostComment) => void;
  onError?: (errorMessage: string) => void;
}

export function usePostCommentCreate(postId: number, options?: Options) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);

  async function createComment(message: string) {
    try {
      setLoading(true);
      setError(null);
      const postComment = await postCommentService.create(postId, message);
      if (options?.onSuccess) {
        options.onSuccess(postComment);
      }
    } catch (e) {
      setError(true);
      if (options?.onError) {
        options.onError('Error creating comment');
      }
      console.log('ERROR CREATING COMMENT =>', e);
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    createComment,
    error,
  };
}
