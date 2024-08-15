import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@theme';
import {Router} from '@routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
