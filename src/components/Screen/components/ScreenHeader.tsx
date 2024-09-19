import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, Icon, ScreenProps, Text, TouchableOpacityBox} from '@components';

type Props = Pick<ScreenProps, 'title' | 'canGoBack' | 'HeaderComponent'>;

const ICON_SIZE = 20;
export function ScreenHeader({canGoBack, title, HeaderComponent}: Props) {
  const navigation = useNavigation();

  const showBackLabel = !title && !HeaderComponent;
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      mb="s24">
      {canGoBack && (
        <TouchableOpacityBox
          testID="screen-back-button"
          onPress={navigation.goBack}
          flexDirection="row"
          alignItems="center"
          mr={'s10'}>
          <Icon size={ICON_SIZE} name="arrowLeft" color="primary" />
          {showBackLabel && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Back
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {HeaderComponent}
      {title && (
        <Text bold preset="headingSmall">
          {title}
        </Text>
      )}
      {title && <Box width={20} />}
    </Box>
  );
}
