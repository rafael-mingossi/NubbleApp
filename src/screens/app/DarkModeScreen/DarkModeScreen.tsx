import React from 'react';

import {RadioButtonSelector, Screen} from '@components';

const items = [
  {
    label: 'Activate',
    onPress: () => {},
    isSelected: false,
  },
  {
    label: 'Deactivate',
    isSelected: true,
    onPress: () => {},
  },
  {
    label: 'System default',
    description: 'It will follow your phone system default',
    onPress: () => {},
    isSelected: false,
  },
];

export function DarkModeScreen() {
  return (
    <Screen canGoBack title="Dark mode">
      <RadioButtonSelector items={items} />
    </Screen>
  );
}
