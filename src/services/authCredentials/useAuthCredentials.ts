import {useContext} from 'react';

import {AuthCredentialsService} from './authCredentialsTypes.ts';
import {AuthCredentialsContext} from './Providers/AuthCredentialsProvider.tsx';

export function useAuthCredentials(): AuthCredentialsService {
  // return useAuthCredentialsZustand();

  const context = useContext(AuthCredentialsContext);

  if (!context) {
    throw new Error('Auth is missing provider');
  }

  return context;
}

// const useAuthCredentialsZustand = create<AuthCredentialsService>()(
//   persist(
//     set => ({
//       authCredentials: null,
//       isLoading: false,
//       saveCredentials: async ac => set({authCredentials: ac}),
//       removeCredentials: async () => set({authCredentials: null}),
//     }),
//     {
//       name: '@Auth',
//       storage: storage,
//     },
//   ),
// );
