import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo, ViewStyle} from 'react-native';

import {Post, postService} from '@domain';

import {PostItem, Screen} from '@components';

import {HomeHeader} from './components/HomeHeader.tsx';
// import {AppTabScreenProps} from '@routes';

// {navigation}: AppTabScreenProps<'HomeScreen'>
export function HomeScreen() {
  const [postList, setPostList] = useState<Post[]>();

  useEffect(() => {
    postService.getList().then(list => setPostList(list));
  });

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={$screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={postList}
        renderItem={renderItem}
        ListHeaderComponent={<HomeHeader />}
        keyExtractor={item => item.id}
      />
    </Screen>
  );
}

const $screen: ViewStyle = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
};
