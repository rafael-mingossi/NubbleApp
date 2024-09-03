import React from 'react';

import {Post} from '@domain';

import {Box} from '@components';

import {PostActions} from './components/PostActions.tsx';
import {PostBottom} from './components/PostBottom.tsx';
import {PostHeader} from './components/PostHeader.tsx';
import {PostImage} from './components/PostImage.tsx';

interface Props {
  post: Post;
}

export function PostItem({post}: Props) {
  return (
    <Box marginBottom="s24" paddingHorizontal="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions
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
