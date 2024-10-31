import {userAdapter} from '@domain';

import {
  PostReaction,
  PostReactionAPI,
  PostReactionBase,
  PostReactionBaseAPI,
} from './postReactionsType.ts';

function toPostReactionBase(
  postReactionBaseAPI: PostReactionBaseAPI,
): PostReactionBase {
  return {
    id: postReactionBaseAPI.id,
    postId: postReactionBaseAPI.post_id,
    emojiType: postReactionBaseAPI.emoji_type,
    userId: postReactionBaseAPI.user_id,
    isChecked: postReactionBaseAPI.is_checked,
    createdAt: postReactionBaseAPI.created_at,
    updatedAt: postReactionBaseAPI.updated_at,
  };
}
function toPostReaction(postReactionAPI: PostReactionAPI): PostReaction {
  return {
    ...toPostReactionBase(postReactionAPI), //re-using the function above
    author: userAdapter.toUser(postReactionAPI.user), //re-using the userAdapter.user
    post: {
      id: postReactionAPI.post.id,
      text: postReactionAPI.post.text,
      imageURL: postReactionAPI.post.image_url,
    },
  };
}

export const postReactionAdapter = {toPostReactionBase, toPostReaction};
