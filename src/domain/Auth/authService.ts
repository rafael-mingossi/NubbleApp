import {api} from '@api';

import {authAdapter} from './authAdapter';
import {authApi} from './authApi';
import {AuthCredentials, SignUpData} from './authTypes';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentials> {
  try {
    const authCredentialsAPI = await authApi.signIn(email, password);
    return authAdapter.toAuthCredentials(authCredentialsAPI);
  } catch (error) {
    throw new Error('email or password invalid');
  }
}

async function signOut(): Promise<string> {
  return await authApi.signOut();
}

async function signUp(signUpData: SignUpData): Promise<void> {
  await authApi.signUp(signUpData);
}

function updateToken(token: string) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function removeToken() {
  api.defaults.headers.common.Authorization = null;
}

async function isUserNameAvailable(username: string): Promise<boolean> {
  const {isAvailable} = await authApi.isUserNameAvailable({username});
  return isAvailable;
}
async function isEmailAvailable(email: string): Promise<boolean> {
  const {isAvailable} = await authApi.isEmailAvailable({email});
  return isAvailable;
}

async function requestNewPassword(email: string): Promise<string> {
  const {message} = await authApi.forgotPassword({email});
  return message;
}

async function authenticatedByRefreshToken(
  refreshToken: string,
): Promise<AuthCredentials> {
  const acAPI = await authApi.refreshToken(refreshToken);
  return authAdapter.toAuthCredentials(acAPI);
}

export const authService = {
  signIn,
  signOut,
  signUp,
  updateToken,
  removeToken,
  isUserNameAvailable,
  isEmailAvailable,
  requestNewPassword,
  authenticatedByRefreshToken,
};
