import React, {useState} from 'react';
import {Dimensions, Image} from 'react-native';

import {Button, Screen, Text, TextInput} from '@components';
import {AppScreenProps} from '@routes';

const IMAGE_WIDTH = Dimensions.get('screen').width / 2;

export function PublishPostScreen({
  route,
}: AppScreenProps<'PublishPostScreen'>) {
  const [description, setDescription] = useState('');
  return (
    <Screen scrollable canGoBack title="New Post">
      <Image
        source={{uri: route.params.imageUri}}
        style={{
          aspectRatio: 1,
          width: IMAGE_WIDTH,
          alignSelf: 'center',
          marginTop: 20,
        }}
      />

      <Text mt="s32" mb="s10" preset="headingSmall">
        Write a title
      </Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Enter text here"
        containerProps={{borderWidth: 0}}
      />
      <Button title="Publish post" mt="s56" />
    </Screen>
  );
}
