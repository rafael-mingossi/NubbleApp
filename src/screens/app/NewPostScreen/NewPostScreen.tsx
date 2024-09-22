import React from 'react';
import {Dimensions, FlatList, Image, ListRenderItemInfo} from 'react-native';

import {useCameraRoll} from '@services';

import {Screen} from '@components';

import {Header} from './components/Header.tsx';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const NUM_COLUMNS = 4;
const ITEM_WIDTH = SCREEN_WIDTH / NUM_COLUMNS;

export function NewPostScreen() {
  const {photoList, fetchNextPage} = useCameraRoll(true);

  function renderItem({item}: ListRenderItemInfo<string>) {
    return (
      <Image
        key={item}
        source={{uri: item}}
        style={{width: ITEM_WIDTH, aspectRatio: 1}}
      />
    );
  }

  return (
    <Screen canGoBack title="New Post" noPaddingHorizontal>
      <FlatList
        data={photoList}
        renderItem={renderItem}
        numColumns={NUM_COLUMNS}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        ListHeaderComponent={
          <Header imageWidth={SCREEN_WIDTH} imageUri={photoList[0]} />
        }
      />
    </Screen>
  );
}
