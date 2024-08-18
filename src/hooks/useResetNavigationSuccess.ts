import {useNavigation} from '@react-navigation/native';

import {AuthStackParamsList} from '@routes';

//THE TS ERRORS HERE WERE FIXED WITH /routes/navigationTypes.ts
export function useResetNavigationSuccess() {
  const navigation = useNavigation();

  function reset(params: AuthStackParamsList['SuccessScreen']) {
    navigation.reset({
      //INDEX REPRESENTS THE INDEX OF THE SCREEN YOU'LL BE REDIRECTED
      index: 1,
      routes: [
        //SCREEN INDEX 0
        {
          name: 'LoginScreen',
        },
        //SCREEN INDEX 1
        {
          name: 'SuccessScreen',
          params,
        },
      ],
    });
  }

  return {
    reset,
  };
}
