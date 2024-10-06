import {Appearance, ColorSchemeName, Platform, StatusBar} from 'react-native';

import {colours} from '@theme';

import {AppColorScheme, ThemePreference} from './settingsType.ts';

function onChangeThemePreference(themePreference: ThemePreference) {
  if (themePreference === 'system') {
    const colorScheme = Appearance.getColorScheme();
    //return light as a fallback in case system does not return a theme
    return colorScheme ? colorScheme : 'light';
  }

  return themePreference;
}

function onSystemChange(
  color: ColorSchemeName,
  themePreference: ThemePreference,
): AppColorScheme | null {
  if (themePreference === 'system') {
    return color ? color : 'light';
  }

  return null;
}

function handleStatusBar(appColor: AppColorScheme) {
  StatusBar.setBarStyle(
    appColor === 'dark' ? 'light-content' : 'dark-content',
    true,
  );

  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor(
      appColor === 'dark'
        ? colours.palette.grayBlack
        : colours.palette.grayWhite,
    );
  }
}

export const settingsService = {
  onChangeThemePreference,
  onSystemChange,
  handleStatusBar,
};
