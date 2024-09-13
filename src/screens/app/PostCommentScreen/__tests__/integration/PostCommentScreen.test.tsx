import React from 'react';
import {Alert, AlertButton} from 'react-native';

import {authCredentialsStorage} from '@services';
import {mockedPostComment, server, resetInMemoryResponse} from '@test';
import {waitForElementToBeRemoved} from '@testing-library/react-native';
import {renderScreen, screen, fireEvent, act} from 'test-utils';

import {PostCommentScreen} from '@screens';

beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
});

afterEach(() => {
  server.resetHandlers();
  resetInMemoryResponse();
});

afterAll(() => {
  server.close();
  jest.resetAllMocks();
  jest.useRealTimers();
});

describe('integration: PostCommentScreen', () => {
  test('When ADDING a comment the list is automatically updated', async () => {
    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: 'PostCommentScreen',
          key: 'PostCommentScreen',
          params: {
            postId: 1,
            postAuthorId: 1,
          },
        }}
      />,
    );

    const comment = await screen.findByText(/comment in mocks/i);

    expect(comment).toBeTruthy();

    const inputText = screen.getByPlaceholderText(/add a comment/i);

    fireEvent.changeText(inputText, 'new comment now');

    fireEvent.press(screen.getByText(/send/i));

    const newComment = await screen.findByText(/new comment now/i);

    expect(newComment).toBeTruthy();

    const comments = await screen.findAllByTestId('post-comment-id');

    expect(comments.length).toBe(3);
  });

  test('When DELETING a comment, the list is automatically updated and a toast message is displayed', async () => {
    jest
      .spyOn(authCredentialsStorage, 'get')
      .mockResolvedValue(mockedPostComment.mateusAuthCredentials);

    let mockedConfirm: AlertButton['onPress'];

    const mockedAlert = jest
      .spyOn(Alert, 'alert')
      .mockImplementation((title, message, buttons) => {
        if (buttons && buttons[0]) {
          mockedConfirm = buttons[0].onPress;
        }
      });

    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: 'PostCommentScreen',
          key: 'PostCommentScreen',
          params: {
            postId: 1,
            postAuthorId: 1,
          },
        }}
      />,
    );

    const comment = await screen.findByText(
      mockedPostComment.mateusPostCommentAPI.message,
      {exact: false},
    );

    expect(comment).toBeTruthy();

    fireEvent(comment, 'longPress');

    expect(mockedAlert).toHaveBeenCalled();

    mockedConfirm && mockedConfirm();

    await waitForElementToBeRemoved(() =>
      screen.queryByText(mockedPostComment.mateusPostCommentAPI.message, {
        exact: false,
      }),
    );

    const comments = await screen.findAllByTestId('post-comment-id');

    expect(comments.length).toBe(1);

    await screen.findByTestId('toast-message');

    act(() => jest.runAllTimers());

    expect(screen.queryByTestId('toast-message')).toBeNull();
  });
});
