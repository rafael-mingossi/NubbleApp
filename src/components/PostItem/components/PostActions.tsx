import React from 'react';

import {Post, useReactToPost} from '@domain';
import {QueryKeys} from '@infra';
import {useNavigation} from '@react-navigation/native';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

type Props = {
  post: Post;
  hideCommentAction?: boolean;
};

export function PostActions({post, hideCommentAction}: Props) {
  const navigation = useNavigation();
  const likeReaction = useReactToPost({post, postReactionType: 'like'});
  const favouriteReaction = useReactToPost({
    post,
    postReactionType: 'favorite',
    queryKeys: [QueryKeys.FavouriteList],
  });

  function navigateToComments() {
    navigation.navigate('PostCommentScreen', {
      postId: post.id,
      postAuthorId: post.author.id,
    });
  }
  return (
    <Box flexDirection="row" columnGap="s24" marginTop="s16">
      <Item
        marked={likeReaction.hasReacted}
        onPress={likeReaction.reactToPost}
        icon={{default: 'heart', marked: 'heartFill'}}
        text={likeReaction.reactionCount}
      />
      <Item
        disabled={hideCommentAction}
        marked={false}
        onPress={navigateToComments}
        icon={{default: 'comment', marked: 'comment'}}
        text={post.commentCount}
      />
      <Item
        marked={favouriteReaction.hasReacted}
        onPress={favouriteReaction.reactToPost}
        icon={{default: 'bookmark', marked: 'bookmarkFill'}}
        text={favouriteReaction.reactionCount}
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
