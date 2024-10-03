import React, {useState} from 'react';

import {RadioButtonSelector, Screen} from '@components';

type ThemePreference = 'light' | 'dark' | 'system';

type Option = {
  label: string;
  description?: string;
  themePreference: ThemePreference;
};

const items: Option[] = [
  {
    label: 'Activate',
    themePreference: 'dark',
  },
  {
    label: 'Deactivate',
    themePreference: 'light',
  },
  {
    label: 'System default',
    themePreference: 'system',
    description: 'It will follow your phone system default',
  },
];

export function DarkModeScreen() {
  const [selectedItem, setSelectedItem] = useState<Option>();
  return (
    <Screen canGoBack title="Dark mode">
      <RadioButtonSelector
        items={items}
        selectedItem={selectedItem}
        onSelect={setSelectedItem}
        labelKey="label"
        valueKey="themePreference"
        descriptionKey="description"
      />
    </Screen>
  );
}
