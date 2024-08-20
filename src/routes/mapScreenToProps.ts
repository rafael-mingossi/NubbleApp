import {IconProps} from '@components';
import {AppTabBottomTabParamList} from '@routes';

export const mapScreenToProps: Record<
  keyof AppTabBottomTabParamList,
  {
    label: string;
    icon: {
      focused: IconProps['name'];
      unfocused: IconProps['name'];
    };
  }
> = {
  HomeScreen: {
    label: 'Home',
    icon: {
      focused: 'homeFill',
      unfocused: 'home',
    },
  },
  NewPostScreen: {
    label: 'New Post',
    icon: {
      focused: 'newPost',
      unfocused: 'newPost',
    },
  },
  FavouritesScreen: {
    label: 'Favourites',
    icon: {
      focused: 'bookmarkFill',
      unfocused: 'bookmark',
    },
  },
  MyProfileScreen: {
    label: 'Profile',
    icon: {
      focused: 'profileFill',
      unfocused: 'profile',
    },
  },
};
