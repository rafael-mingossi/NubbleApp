import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

import {images} from '@assets';
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

  function navigateToCameraScreen() {
    navigation.navigate('CameraScreen');
  }
  return (
    <Box>
      <ImageBackground
        source={imageUri ? {uri: imageUri} : images.imagePlaceholder}
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
        <Icon name="camera" onPress={navigateToCameraScreen} />
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
