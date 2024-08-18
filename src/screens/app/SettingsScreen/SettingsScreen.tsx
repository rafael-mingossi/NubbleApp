import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function SettingsScreen({navigation}: AppScreenProps<'SettingsScreen'>) {
  console.log(navigation);
  return (
    <Screen canGoBack>
      <Text preset="headingLarge">SETTINGS</Text>
      <Button title="Settings" />
    </Screen>
  );
}
