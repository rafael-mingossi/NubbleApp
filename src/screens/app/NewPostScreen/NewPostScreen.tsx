import React, {useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItemInfo,
  Pressable,
} from 'react-native';

import {useCameraRoll, usePermission} from '@services';

import {Screen} from '@components';

import {Header} from './components/Header.tsx';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const NUM_COLUMNS = 4;
const ITEM_WIDTH = SCREEN_WIDTH / NUM_COLUMNS;

export function NewPostScreen() {
  const permission = usePermission('photoLibrary');
  const [selectedImage, setSelectedImage] = useState<string>();
  const {photoList, fetchNextPage} = useCameraRoll(
    permission.status === 'granted',
    setSelectedImage,
  );

  const flatListRef = useRef<FlatList>(null);

  function onSelectImage(imageUri: string) {
    setSelectedImage(imageUri);
    flatListRef.current?.scrollToOffset({offset: 0, animated: true});
  }

  function renderItem({item}: ListRenderItemInfo<string>) {
    return (
      <Pressable onPress={() => onSelectImage(item)}>
        <Image
          key={item}
          source={{uri: item}}
          style={{width: ITEM_WIDTH, aspectRatio: 1}}
        />
      </Pressable>
    );
  }

  return (
    <Screen canGoBack title="New Post" noPaddingHorizontal>
      <FlatList
        ref={flatListRef}
        data={photoList}
        renderItem={renderItem}
        numColumns={NUM_COLUMNS}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        ListHeaderComponent={
          <Header imageWidth={SCREEN_WIDTH} imageUri={selectedImage} />
        }
      />
    </Screen>
  );
}
