import {useAuthIsUsernameAvailable} from '@domain';
import {UseFormGetFieldState, UseFormWatch} from 'react-hook-form';

import {SignUpSchema} from './signUpSchema.ts';

type Props = {
  watch: UseFormWatch<SignUpSchema>;
  getFieldState: UseFormGetFieldState<SignUpSchema>;
};

export function useAsyncValidation({watch, getFieldState}: Props) {
  const username = watch('username');
  const usernameState = getFieldState('username');
  ///Username IS valid AND username is not empty
  const usernameIsValid = !usernameState.invalid && usernameState.isDirty;
  const usernameQuery = useAuthIsUsernameAvailable({
    username,
    enabled: usernameIsValid,
  });

  return {
    errorMessage: usernameQuery.isUnavailable
      ? 'username already taken'
      : undefined,
    notReady: usernameQuery.isFetching || usernameQuery.isUnavailable,
    isFetching: usernameQuery.isFetching,
  };
}
