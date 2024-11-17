import {MutationOptions, QueryKeys} from '@infra';
import {useAuthCredentials} from '@services';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {userService} from '../userService';
import {UpdateUserParams, User} from '../userTypes';

export function useUserUpdate(options?: MutationOptions<User>) {
  const queryClient = useQueryClient();
  const {authCredentials, updateUser: updateAuthUser} = useAuthCredentials();
  const {mutate, isLoading} = useMutation<User, unknown, UpdateUserParams>({
    mutationFn: params => updateUser(params),
    retry: false,
    onError: error => {
      console.log(error);
      if (options?.onError) {
        //TODO: handle error
      }
    },
    onSuccess: user => {
      queryClient.invalidateQueries([QueryKeys.UserGetById, user.id]);
      updateAuthUser(user); //this will update the user in the storage
      if (options?.onSuccess) {
        options.onSuccess(user);
      }
    },
  });

  async function updateUser(params: UpdateUserParams): Promise<User> {
    if (!authCredentials) {
      throw new Error('current user not found');
    }
    return await userService.updateUser(authCredentials.user, params);
  }

  return {
    isLoading,
    updateUser: (params: UpdateUserParams) => mutate(params),
  };
}
