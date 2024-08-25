import React, {ReactNode} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';

import {Box, BoxProps} from '@components';
import {useAppSafeArea, useAppTheme} from '@hooks';

import {ScrollViewContainer, ViewContainer, ScreenHeader} from './components';

export interface ScreenProps extends BoxProps {
  children: ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  title?: string;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  style,
  title,
  ...boxProps
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          style={[{paddingTop: top, paddingBottom: bottom}, style]}
          paddingHorizontal="s24"
          {...boxProps}>
          <ScreenHeader canGoBack={canGoBack} title={title} />
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
