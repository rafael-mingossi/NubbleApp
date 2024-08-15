import {RootStackParamsList} from './Routes.tsx';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamsList {}
  }
}
