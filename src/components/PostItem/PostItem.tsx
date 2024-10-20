import React from 'react';

import {Post} from '@domain';

import {Box, ProfileUser} from '@components';

import {PostActions} from './components/PostActions.tsx';
import {PostBottom} from './components/PostBottom.tsx';
import {PostImage} from './components/PostImage.tsx';

interface Props {
  post: Post;
  hideCommentAction?: boolean;
}

export function PostItem({post, hideCommentAction}: Props) {
  return (
    <Box marginBottom="s24" paddingHorizontal="s24">
      <ProfileUser
        user={{
          id: post.author.id,
          username: post.author.userName,
          profileUrl: post.author.profileURL,
        }}
      />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        hideCommentAction={hideCommentAction}
        favoriteCount={post.favoriteCount}
        commentCount={post.commentCount}
        reactionCount={post.reactionCount}
      />
      <PostBottom
        commentCount={post.commentCount}
        text={post.text}
        author={post.author}
        id={post.id}
      />
    </Box>
  );
}
