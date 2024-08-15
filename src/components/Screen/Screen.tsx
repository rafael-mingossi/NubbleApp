import React, {ReactNode} from 'react';
import {Box, Icon, Text} from '@components';
import {useAppSafeArea, useAppTheme} from '@hooks';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {
  ScrollViewContainer,
  ViewContainer,
} from './components/ScreenContainer.tsx';

interface ScreenProps {
  children: ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          style={{paddingTop: top, paddingBottom: bottom}}
          paddingHorizontal="s24"
          paddingBottom="s24">
          {canGoBack && (
            <Box mb="s24" flexDirection="row" alignItems="center">
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" semiBold ml="s8">
                Back
              </Text>
            </Box>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
