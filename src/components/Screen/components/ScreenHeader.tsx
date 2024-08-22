import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, Icon, ScreenProps, Text, TouchableOpacityBox} from '@components';

type Props = Pick<ScreenProps, 'title' | 'canGoBack'>;

const ICON_SIZE = 20;
export function ScreenHeader({canGoBack, title}: Props) {
  const navigation = useNavigation();
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      mb="s24">
      {canGoBack && (
        <TouchableOpacityBox
          onPress={navigation.goBack}
          flexDirection="row"
          alignItems="center">
          <Icon size={ICON_SIZE} name="arrowLeft" color="primary" />
          {!title && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Back
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {title && (
        <Text bold preset="headingSmall">
          {title}
        </Text>
      )}
      {title && <Box width={20} />}
    </Box>
  );
}
