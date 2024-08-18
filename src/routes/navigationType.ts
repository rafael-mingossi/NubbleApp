import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppStackParamsList} from './AppStack';
import {AppTabBottomTabParamList} from './AppTabNavigator.tsx';
import {AuthStackParamsList} from './AuthStack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamsList {}
  }
}

export type AppScreenProps<RouteName extends keyof AppStackParamsList> =
  NativeStackScreenProps<AppStackParamsList, RouteName>;

export type AuthScreenProps<RouteName extends keyof AuthStackParamsList> =
  NativeStackScreenProps<AuthStackParamsList, RouteName>;

export type AppTabScreenProps<
  RouteName extends keyof AppTabBottomTabParamList,
> = CompositeScreenProps<
  BottomTabScreenProps<AppTabBottomTabParamList, RouteName>,
  NativeStackScreenProps<AppStackParamsList, 'AppTabNavigator'>
>;
