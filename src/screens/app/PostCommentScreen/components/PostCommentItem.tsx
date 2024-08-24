import React from 'react';

import {PostComment} from '@domain';

import {Box, ProfileAvatar, Text} from '@components';

interface Props {
  postComment: PostComment;
}

export function PostCommentItem({postComment}: Props) {
  return (
    <Box flexDirection="row" columnGap="s12" alignItems="center" mb="s16">
      <ProfileAvatar imageURL={postComment.author.profileURL} />
      <Box flex={1}>
        <Text preset="paragraphSmall" bold>
          {postComment.author.userName}
        </Text>
        <Text preset="paragraphSmall" color="gray1">
          {postComment.message} - {postComment.createdAtRelative}
        </Text>
      </Box>
    </Box>
  );
}
