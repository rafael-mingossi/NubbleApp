import React, {useEffect} from 'react';

import {useAppColor} from '@services';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';
import {useAppColorScheme} from '@hooks';

//Changed imports here because of life cycle issues importing from @...
import {Router} from './src/routes/Routes';
import {AuthCredentialsProvider} from './src/services/authCredentials/Providers/AuthCredentialsProvider';
import {settingsService} from './src/services/settings/settingsService.ts';
import {initialiseStorage, MMKVStorage} from './src/services/storage';
import {darkTheme, theme} from './src/theme/theme';

initialiseStorage(MMKVStorage);

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  useAppColorScheme();
  const appColor = useAppColor();

  useEffect(() => {
    settingsService.handleStatusBar(appColor);
  }, [appColor]);

  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={appColor === 'dark' ? darkTheme : theme}>
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
