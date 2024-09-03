import React from 'react';

// import {ToastProvider} from '@services';
import {
  AuthCredentialsProvider,
  initialiseStorage,
  MMKVStorage,
} from '@services';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';
import {Router} from '@routes';
import {theme} from '@theme';

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
