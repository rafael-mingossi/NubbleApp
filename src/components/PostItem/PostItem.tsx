import React from 'react';

import {Post} from '@domain';

import {Box} from '../Box/Box';
import {ProfileUser} from '../ProfileUser/ProfileUser';

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
      <PostActions hideCommentAction={hideCommentAction} post={post} />
      <PostBottom
        commentCount={post.commentCount}
        text={post.text}
        author={post.author}
        id={post.id}
      />
    </Box>
  );
}
