import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {useAuthCredentials} from '@services';

import {ActivityIndicator, Box} from '@components';

import {AppStack} from './AppStack.tsx';
import {AuthStack} from './AuthStack.tsx';
// import {OnboardingStack} from './OnboardingStack.tsx';

export function Router() {
  const {authCredentials, isLoading} = useAuthCredentials();

  if (isLoading) {
    return (
      <Box
        flex={1}
        backgroundColor="background"
        justifyContent="center"
        alignItems="center">
        <ActivityIndicator size="large" />
      </Box>
    );
  }

  return (
    <NavigationContainer>
      {authCredentials ? <AppStack /> : <AuthStack />}
      {/*<OnboardingStack />*/}
    </NavigationContainer>
  );
}
