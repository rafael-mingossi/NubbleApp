import React, {ReactNode} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Box, BoxProps, Icon, Text, TouchableOpacityBox} from '@components';
import {useAppSafeArea, useAppTheme} from '@hooks';

import {
  ScrollViewContainer,
  ViewContainer,
} from './components/ScreenContainer.tsx';

interface ScreenProps extends BoxProps {
  children: ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  style,
  ...boxProps
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();
  const navigation = useNavigation();

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
          {canGoBack && (
            <TouchableOpacityBox
              onPress={navigation.goBack}
              mb="s24"
              flexDirection="row"
              alignItems="center">
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" semiBold ml="s8">
                Back
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
