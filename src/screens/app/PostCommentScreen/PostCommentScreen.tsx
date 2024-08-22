import React from 'react';

import {usePostCommentList} from '@domain';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;
  const {list} = usePostCommentList(postId);

  return (
    <Screen canGoBack title="Comments">
      <Text preset="headingLarge">COMMENTS</Text>
      <Text preset="headingLarge">{list[0].message}</Text>
    </Screen>
  );
}
