import React from 'react';

import {useAuthSignOut} from '@domain';

import {Button, Screen, Text} from '@components';
// import {AppScreenProps} from '@routes';

export function SettingsScreen() {
  const {signOut, isLoading} = useAuthSignOut();
  return (
    <Screen canGoBack>
      <Text preset="headingLarge">SETTINGS</Text>
      <Button title="Log out" onPress={signOut} loading={isLoading} />
    </Screen>
  );
}
