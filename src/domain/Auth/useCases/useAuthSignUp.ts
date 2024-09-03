import {AuthCredentials, authService, SignUpData} from '@domain';
import {MutationOptions} from '@infra';
import {useMutation} from '@tanstack/react-query';

export function useAuthSignUp(options?: MutationOptions<AuthCredentials>) {
  const mutation = useMutation<void, Error, SignUpData>({
    mutationFn: signUpData => authService.signUp(signUpData),
    retry: false,
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
    onSuccess: () => {
      if (options?.onSuccess) {
        options.onSuccess;
      }
    },
  });

  function signUp(signUpData: SignUpData) {
    mutation.mutate(signUpData);
  }

  return {
    isLoading: mutation.isLoading,
    signUp,
  };
}
