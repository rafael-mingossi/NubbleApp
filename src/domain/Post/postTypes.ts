import {PostReaction, PostReactionAPI} from '../PostReaction';
import {UserAPI} from '../User';

export interface Post {
  id: number;
  text: string;
  author: {
    profileURL: string;
    name: string;
    userName: string;
    id: number;
  };
  imageURL: string;
  reactionCount: number;
  commentCount: number;
  favoriteCount: number;
  reactions: Pick<PostReaction, 'emojiType' | 'postId'>[];
}

export interface PostAPI {
  id: number;
  text: string;
  user_id: number;
  image_url: string;
  is_fixed: boolean;
  is_activated: boolean;
  created_at: string;
  updated_at: string;
  user: UserAPI;
  status: string;
  meta: {
    like_count: string;
    favorite_count: string;
    comments_count: string;
  };
  reactions: Pick<PostReactionAPI, 'emoji_type' | 'post_id'>[];
}
