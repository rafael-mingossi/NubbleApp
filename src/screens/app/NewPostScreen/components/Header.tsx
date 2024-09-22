import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

import {Box, BoxProps, Button, Icon, Text} from '@components';

interface Props {
  imageUri: string;
  imageWidth: number;
}

export function Header({imageWidth, imageUri}: Props) {
  return (
    <Box>
      <ImageBackground
        source={{uri: imageUri}}
        style={[
          {
            width: imageWidth,
          },
          styles.imageBackground,
        ]}>
        <Button title={'Pick image'} mb="s24" preset="ghost" />
      </ImageBackground>
      <Box {...$optionsStyles}>
        <Text preset="headingSmall">Your gallery</Text>
        <Icon name="camera" />
      </Box>
    </Box>
  );
}

const $optionsStyles: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 's24',
  alignItems: 'center',
  paddingVertical: 's16',
};

const styles = StyleSheet.create({
  imageBackground: {
    aspectRatio: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
