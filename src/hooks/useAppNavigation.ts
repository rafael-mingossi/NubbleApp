import {useNavigation} from '@react-navigation/native';
import {useAuthCredentials} from '@services';

import {AppStackParamsList} from '@routes';

type Params = Omit<AppStackParamsList['PostCommentScreen'], 'showPost'>;

export function useAppNavigation() {
  const {authCredentials} = useAuthCredentials();

  const navigation = useNavigation();

  function toProfile(userId: number) {
    if (authCredentials?.user.id === userId) {
      navigation.navigate('AppTabNavigator', {screen: 'MyProfileScreen'});
    } else {
      navigation.navigate('ProfileScreen', {userId});
    }
  }

  function toPostComment(params: Params) {
    navigation.navigate('PostCommentScreen', params);
  }

  function toPostDetails(params: Params) {
    navigation.navigate('PostCommentScreen', {...params, showPost: true});
  }

  const navigate = {
    toProfile,
    toPostComment,
    toPostDetails,
  };

  return navigate;
}
