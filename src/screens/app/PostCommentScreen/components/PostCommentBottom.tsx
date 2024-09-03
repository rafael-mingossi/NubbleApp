import React from 'react';
import {Pressable} from 'react-native';

import {Text} from '@components';

interface Props {
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

export function PostCommentBottom({fetchNextPage, hasNextPage}: Props) {
  if (hasNextPage) {
    return (
      <Pressable onPress={fetchNextPage}>
        <Text color="primary" bold textAlign="center">
          Load More
        </Text>
      </Pressable>
    );
  }

  return null;
}
