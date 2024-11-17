import React from 'react';

import {Post} from '@domain';

import {useAppNavigation} from '@hooks';

import {Box} from '../../Box/Box';
import {Text} from '../../Text/Text';

type Props = Pick<Post, 'text' | 'commentCount' | 'author' | 'id'> & {
  hideCommentAction?: boolean;
};

export function PostBottom({
  text,
  author,
  commentCount,
  id,
  hideCommentAction,
}: Props) {
  const commentText = hideCommentAction ? null : getCommentText(commentCount);
  const navigate = useAppNavigation();

  function navigateToPostCommentScreen() {
    navigate.toPostComment({
      postId: id,
      postAuthorId: author.id,
    });
  }

  return (
    <Box marginTop="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" semiBold color="gray1" mb="s8">
        {text}
      </Text>
      {commentText && (
        <Text
          preset="paragraphSmall"
          bold
          onPress={navigateToPostCommentScreen}>
          {commentText}
        </Text>
      )}
    </Box>
  );
}

function getCommentText(commentCount: number) {
  if (commentCount === 1) {
    return '1 comment';
  } else if (commentCount > 1) {
    return `${commentCount} comments`;
  }
}
