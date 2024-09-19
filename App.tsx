import React from 'react';

// import {ToastProvider} from '@services';
// import {
//   AuthCredentialsProvider,
//   initialiseStorage,
//   MMKVStorage,
// } from '@services';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';

//Changed imports here because of life cycle issues importing from @...
import {Router} from './src/routes/Routes';
import {AuthCredentialsProvider} from './src/services/authCredentials/Providers/AuthCredentialsProvider';
import {initialiseStorage, MMKVStorage} from './src/services/storage';
import {theme} from './src/theme/theme';

initialiseStorage(MMKVStorage);

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            {/*<ToastProvider>*/}
            <Router />
            <Toast />
            {/*</ToastProvider>*/}
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
}

export default App;
