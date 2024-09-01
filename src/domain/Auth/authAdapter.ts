import {userAdapter} from '@domain';

import {AuthCredentials, AuthCredentialsAPI} from './authTypes';

function toAuthCredentials(
  authCredentialsAPI: AuthCredentialsAPI,
): AuthCredentials {
  return {
    token: authCredentialsAPI.auth.token,
    user: userAdapter.toUser(authCredentialsAPI.user),
  };
}

export const authAdapter = {toAuthCredentials};
