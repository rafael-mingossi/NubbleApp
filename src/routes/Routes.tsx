import React, {ReactElement} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {ActivityIndicator, Box} from '@components';

import {AppStack} from './AppStack.tsx';
import {AuthStack} from './AuthStack.tsx';
import {OnboardingStack} from './OnboardingStack.tsx';
import {Stacks, useRouter} from './useRouter.ts';

function LoadingScreen() {
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

const stacks: Record<Stacks, ReactElement> = {
  Loading: <LoadingScreen />,
  Auth: <AuthStack />,
  App: <AppStack />,
  Onboarding: <OnboardingStack />,
};

export function Router() {
  const stack = useRouter();

  const Stack = stacks[stack];
  return <NavigationContainer>{Stack}</NavigationContainer>;
}
