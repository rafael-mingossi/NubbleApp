import React from 'react';
import {Alert, Pressable} from 'react-native';

import {PostComment, postCommentService, usePostCommentRemove} from '@domain';
import {useToastService} from '@services';

import {Box, ProfileAvatar, Text} from '@components';

interface Props {
  postComment: PostComment;
  userId: number;
  postAuthorId: number;
  onRemoveComment: () => void;
}

export function PostCommentItem({
  postComment,
  onRemoveComment,
  postAuthorId,
  userId,
}: Props) {
  const {showToast} = useToastService();

  const {mutate} = usePostCommentRemove({
    onSuccess: () => {
      onRemoveComment();
      showToast({message: 'Comment deleted', duration: 2000});
    },
  });

  const isAllowedToDelete = postCommentService.isAllowedToDelete(
    postComment,
    userId,
    postAuthorId,
  );

  function confirmRemove() {
    Alert.alert('Confirm the exclusion?', 'Press Confirm', [
      {
        text: 'Confirm',
        onPress: () => mutate({postCommentId: postComment.id}),
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);
  }

  return (
    <Pressable onLongPress={confirmRemove} disabled={!isAllowedToDelete}>
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
    </Pressable>
  );
}
