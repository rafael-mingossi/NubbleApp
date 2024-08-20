import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from './AppStack.tsx';
import {AuthStack} from './AuthStack.tsx';

export function Router() {
  const authenticated = true;
  return (
    <NavigationContainer>
      {authenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
