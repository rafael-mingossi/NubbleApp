import React from 'react';

import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, Text} from '@components';

type Props = Pick<Post, 'text' | 'commentCount' | 'author' | 'id'>;

export function PostBottom({text, author, commentCount, id}: Props) {
  const commentText = getCommentText(commentCount);
  const navigation = useNavigation();

  function navigateToPostCommentScreen() {
    navigation.navigate('PostCommentScreen', {
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
