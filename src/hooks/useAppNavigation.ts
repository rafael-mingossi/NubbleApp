import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAuthCredentials} from '@services';

import {AppStackParamsList} from '../routes/AppStack';

type Params = Omit<AppStackParamsList['PostCommentScreen'], 'showPost'>;

export function useAppNavigation() {
  const {authCredentials} = useAuthCredentials();

  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamsList>>();

  function toProfile(userId: number) {
    if (authCredentials?.user.id === userId) {
      navigation.navigate('AppTabNavigator', {screen: 'MyProfileScreen'});
    } else {
      navigation.push('ProfileScreen', {userId});
    }
  }

  function toPostComment(params: Params) {
    navigation.push('PostCommentScreen', params);
  }

  function toPostDetails(params: Params) {
    navigation.push('PostCommentScreen', {...params, showPost: true});
  }

  const navigate = {
    toProfile,
    toPostComment,
    toPostDetails,
  };

  return navigate;
}
