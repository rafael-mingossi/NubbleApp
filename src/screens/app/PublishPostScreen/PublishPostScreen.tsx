import React, {useState} from 'react';
import {Dimensions, Image} from 'react-native';

import {usePostCreate} from '@domain';
import {useToastService} from '@services';

import {Button, Screen, Text, TextInput} from '@components';
import {AppScreenProps} from '@routes';

const IMAGE_WIDTH = Dimensions.get('screen').width / 2;

export function PublishPostScreen({
  route,
  navigation,
}: AppScreenProps<'PublishPostScreen'>) {
  const imageUri = route.params.imageUri;
  const [description, setDescription] = useState('');

  const {showToast} = useToastService();

  const {createPost, isLoading} = usePostCreate({
    onSuccess: () => {
      navigation.navigate('AppTabNavigator', {screen: 'HomeScreen'});
      showToast({message: 'Photo published', type: 'success'});
    },
  });

  function publishPost() {
    createPost({description, imageUri});
  }

  return (
    <Screen scrollable canGoBack title="New Post">
      <Image
        source={{uri: imageUri}}
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
      <Button
        title="Publish post"
        mt="s56"
        onPress={publishPost}
        loading={isLoading}
        disabled={description.length < 1}
      />
    </Screen>
  );
}
