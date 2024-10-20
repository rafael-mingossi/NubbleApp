import React from 'react';

import {Post} from '@domain';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

type Props = Pick<Post, 'commentCount' | 'favoriteCount' | 'reactionCount'> & {
  hideCommentAction?: boolean;
};

export function PostActions({
  reactionCount,
  favoriteCount,
  commentCount,
  hideCommentAction,
}: Props) {
  function likePost() {}
  function navigateToComments() {}
  function favouritePost() {}
  return (
    <Box flexDirection="row" columnGap="s24" marginTop="s16">
      <Item
        marked={true}
        onPress={likePost}
        icon={{default: 'heart', marked: 'heartFill'}}
        text={reactionCount}
      />
      <Item
        disabled={hideCommentAction}
        marked={false}
        onPress={navigateToComments}
        icon={{default: 'comment', marked: 'comment'}}
        text={commentCount}
      />
      <Item
        marked={false}
        onPress={favouritePost}
        icon={{default: 'bookmark', marked: 'bookmarkFill'}}
        text={favoriteCount}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked: boolean;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
  text: number;
  disabled?: boolean;
}

function Item({onPress, icon, marked, text, disabled}: ItemProps) {
  return (
    <TouchableOpacityBox
      disabled={disabled}
      flexDirection="row"
      alignItems="center"
      onPress={onPress}>
      <Icon
        color={marked ? 'marked' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {text > 0 && (
        <Text preset="paragraphSmall" bold marginLeft="s4">
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
