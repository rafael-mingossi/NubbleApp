import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {storage} from '../storage';

import {settingsService} from './settingsService.ts';
import {
  AppColorScheme,
  SettingsStore,
  ThemePreference,
} from './settingsType.ts';

const useSettingsStore = create<SettingsStore>()(
  persist(
    (set, get) => ({
      appColor: 'light',
      themePreference: 'system',
      onSystemChange: color => {
        const updatedAppTheme = settingsService.onSystemChange(
          color,
          get().themePreference,
        );
        if (updatedAppTheme) {
          set({appColor: updatedAppTheme});
        }
      },
      setThemePreference: newThemePreference => {
        const updatedAppTheme =
          settingsService.onChangeThemePreference(newThemePreference);
        set({appColor: updatedAppTheme, themePreference: newThemePreference});
      },
    }),
    {
      name: '@Settings',
      storage: storage,
    },
  ),
);

export function useAppColor(): AppColorScheme {
  return useSettingsStore(state => state.appColor);
}

export function useThemePreference(): ThemePreference {
  return useSettingsStore(state => state.themePreference);
}

export function useSettingsService(): Pick<
  SettingsStore,
  'setThemePreference' | 'onSystemChange'
> {
  const setThemePreference = useSettingsStore(
    state => state.setThemePreference,
  );
  const onSystemChange = useSettingsStore(state => state.onSystemChange);

  return {
    setThemePreference,
    onSystemChange,
  };
}
