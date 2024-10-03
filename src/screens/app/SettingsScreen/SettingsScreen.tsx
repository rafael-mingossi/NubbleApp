import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {useAuthSignOut} from '@domain';

import {Button, Screen, Separator} from '@components';

import {MenuItem, MenuItemProps} from './components/MenuItem.tsx';
// import {AppScreenProps} from '@routes';

export function SettingsScreen() {
  const {signOut, isLoading} = useAuthSignOut();

  const items: MenuItemProps[] = [
    {label: 'Terms and conditions', onPress: () => {}},
    {label: 'Privacy policy', onPress: () => {}},
    {label: 'Dark mode', onPress: () => {}},
  ];

  function renderItem({item}: ListRenderItemInfo<MenuItemProps>) {
    return <MenuItem {...item} />;
  }

  return (
    <Screen canGoBack title="Settings" flex={1}>
      <FlatList
        bounces={false}
        data={items}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={
          <Button
            title="Log out"
            onPress={signOut}
            loading={isLoading}
            marginTop="s40"
          />
        }
      />
    </Screen>
  );
}
