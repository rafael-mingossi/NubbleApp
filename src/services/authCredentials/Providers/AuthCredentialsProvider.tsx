import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';

import {AuthCredentials, authService} from '@domain';
import {AuthCredentialsService} from '@services';

import {authCredentialsStorage} from '../authCredentialsStorage.ts';

export const AuthCredentialsContext = createContext<AuthCredentialsService>({
  authCredentials: null,
  isLoading: false,
  saveCredentials: async () => {},
  removeCredentials: async () => {},
});

export function AuthCredentialsProvider({children}: PropsWithChildren<{}>) {
  const [isLoading, setIsLoading] = useState(true);
  const [authCredentials, setAuthCredentials] =
    useState<AuthCredentials | null>(null);

  useEffect(() => {
    startAuthCredentials();
  }, []);

  async function startAuthCredentials() {
    try {
      // await new Promise(resolve => setTimeout(resolve, 2000, ''));
      const ac = await authCredentialsStorage.get();
      if (ac) {
        authService.updateToken(ac.token);
        setAuthCredentials(ac);
      }
    } catch (e) {
      console.log('ERROR STARTING CREDENTIALS TOKEN, =>', e);
    } finally {
      setIsLoading(false);
    }
  }

  async function saveCredentials(ac: AuthCredentials): Promise<void> {
    authService.updateToken(ac.token);
    await authCredentialsStorage.set(ac);
    setAuthCredentials(ac);
  }

  async function removeCredentials() {
    authService.removeToken();
    await authCredentialsStorage.remove();
    setAuthCredentials(null);
  }

  return (
    <AuthCredentialsContext.Provider
      value={{authCredentials, isLoading, saveCredentials, removeCredentials}}>
      {children}
    </AuthCredentialsContext.Provider>
  );
}
