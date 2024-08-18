import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppStackParamsList} from './AppStack';
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
