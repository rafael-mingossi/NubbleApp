import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {
  HomeScreen,
  NewPostScreen,
  FavouritesScreen,
  MyProfileScreen,
} from '@screens';

import {AppTabBar} from './AppTabBar.tsx';

export type AppTabBottomTabParamList = {
  FavouritesScreen: undefined;
  HomeScreen: undefined;
  MyProfileScreen: undefined;
  NewPostScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

export function AppTabNavigator() {
  function renderTabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} tabBar={renderTabBar}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="NewPostScreen" component={NewPostScreen} />
      <Tab.Screen name="FavouritesScreen" component={FavouritesScreen} />
      <Tab.Screen name="MyProfileScreen" component={MyProfileScreen} />
    </Tab.Navigator>
  );
}
