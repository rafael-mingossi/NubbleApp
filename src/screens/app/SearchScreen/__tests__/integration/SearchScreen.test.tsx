import React from 'react';

import {authCredentialsStorage} from '@services';
import {mockUtils, server, userMocked} from '@test';
import {renderScreen, screen, fireEvent} from 'test-utils';

import {AppStack} from '@routes';

jest.unmock('@react-navigation/native');

beforeAll(() => {
  server.listen();
  jest
    .spyOn(authCredentialsStorage, 'get')
    .mockResolvedValue(mockUtils.mateusAuthCredentials);
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
  jest.resetAllMocks();
});

describe('integration: SearchScreen', () => {
  test('Search User Flow', async () => {
    renderScreen(<AppStack initialRouteName="SearchScreen" />);

    // Find the textInput by its placeholder
    const inputText = screen.getByPlaceholderText(/search for a user/i);

    expect(inputText).toBeTruthy();

    // Fire the text typing inside textInput
    fireEvent.changeText(inputText, 'mar');

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
  });
});
