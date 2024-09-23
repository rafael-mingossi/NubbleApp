import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Box, BoxProps, Button, Icon, Text} from '@components';

interface Props {
  imageUri?: string;
  imageWidth: number;
}

export function Header({imageWidth, imageUri}: Props) {
  const navigation = useNavigation();

  function navigateToPublishPost() {
    if (imageUri) {
      navigation.navigate('PublishPostScreen', {imageUri});
    }
  }
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
        {Boolean(imageUri) && (
          <Button
            title={'Pick image'}
            mb="s24"
            preset="ghost"
            onPress={navigateToPublishPost}
          />
        )}
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
