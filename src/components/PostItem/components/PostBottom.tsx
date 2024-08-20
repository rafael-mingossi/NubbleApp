import React from 'react';

import {Post} from '@domain';

import {Box, Text} from '@components';

type Props = Pick<Post, 'text' | 'commentCount' | 'author'>;

export function PostBottom({text, author, commentCount}: Props) {
  const commentText = getCommentText(commentCount);

  return (
    <Box marginTop="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" semiBold color="gray1" mb="s8">
        {text}
      </Text>
      {commentText && (
        <Text preset="paragraphSmall" bold>
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
