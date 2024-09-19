import React from 'react';

import {authCredentialsStorage} from '@services';
import {mockUtils, server, userMocked} from '@test';
import {renderScreen, screen, fireEvent, act} from 'test-utils';

import {AppStack} from '@routes';

//This will undo the navigation mock in jestSetup and use the real navigation
jest.unmock('@react-navigation/native');

beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
  jest
    .spyOn(authCredentialsStorage, 'get')
    .mockResolvedValue(mockUtils.mateusAuthCredentials);
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
  jest.useRealTimers();
  jest.resetAllMocks();
});

describe('integration: SearchScreen', () => {
  test('Search User Flow', async () => {
    renderScreen(<AppStack initialRouteName="SearchScreen" />);

    // Find the textInput by its placeholder
    const inputText = screen.getByPlaceholderText(/search for a user/i);

    // Fire the text typing inside textInput
    fireEvent.changeText(inputText, 'mar');
    act(() => jest.runAllTimers());

    // Check if the result of the above typing appeared on the screen
    const user1 = await screen.findByText(userMocked.user1.username);
    expect(user1).toBeTruthy();

    const user2 = await screen.findByText(userMocked.user2.username);
    expect(user2).toBeTruthy();

    //At this stage, I added a inMemoryStorage.ts to start the storage using Jest
    //Also added initialiseStorage(inMemoryStorage); in jestSetup
    //Fire the click on the user Marcelo
    fireEvent.press(user1);

    //Now instead of looking for the username, we will use the full name
    //At this stage I added jest.unmock('@react-navigation/native');
    //This will make the navigation work normally and not mocked as in jestSetup
    const userFullName = await screen.findByText(userMocked.user1.full_name);
    expect(userFullName).toBeTruthy();

    //Press Back button to navigate back to SearchScreen
    const backButton = await screen.findByTestId('screen-back-button');
    fireEvent.press(backButton);

    //Clean the search input, so the history search will appear
    const inputAfterBackBtn = screen.getByPlaceholderText(/search for a user/i);
    fireEvent.changeText(inputAfterBackBtn, '');
    act(() => jest.runAllTimers());

    //Make sure the history section appears
    const searchHistoryTitle = screen.getByText(/recent searches/i);
    expect(searchHistoryTitle).toBeTruthy();

    //Check if clicked user was saved in search history
    const user1AfterBackButton = screen.queryByText(userMocked.user1.username);
    expect(user1AfterBackButton).toBeTruthy();

    //The user2 should not appear on the list
    //Using query here because I am searching for an element that is not on the screen
    const user2NotVisible = screen.queryByText(userMocked.user2.username);
    expect(user2NotVisible).toBeFalsy();

    //Test if delete icon and action is working when deleting
    const icon = screen.getByTestId('trash');
    fireEvent.press(icon);

    //Make sure user1 was removed from the list
    const user1AfterBeingRemoved = screen.queryByText(
      userMocked.user1.username,
    );
    expect(user1AfterBeingRemoved).toBeFalsy();
  });
});
