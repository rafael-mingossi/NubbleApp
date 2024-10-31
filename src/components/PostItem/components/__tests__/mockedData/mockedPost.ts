import {Post} from '@domain';

export const mockedPost: Post = {
  id: 1,
  imageURL: 'fake-url',
  favoriteCount: 2,
  reactionCount: 8,
  commentCount: 5,
  text: 'this is the text (post description)',
  author: {
    id: 2,
    name: 'Maria Julia',
    profileURL: 'https://example.com',
    userName: 'mariajulia',
  },
  reactions: [],
};
