import React, {useRef} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  ViewStyle,
} from 'react-native';

import {Post, usePostList} from '@domain';
import {useScrollToTop} from '@react-navigation/native';

import {PostItem, Screen} from '@components';

import {HomeEmpty} from './components/HomeEmpty.tsx';
import {HomeHeader} from './components/HomeHeader.tsx';
// import {AppTabScreenProps} from '@routes';

// {navigation}: AppTabScreenProps<'HomeScreen'>
export function HomeScreen() {
  const {
    isLoading,
    refresh,
    isError,
    list: postList,
    fetchNextPage,
  } = usePostList();
  const flatListRef = useRef<FlatList<Post>>(null);
  useScrollToTop(flatListRef);

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={$screen}>
      <FlatList
        ref={flatListRef}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        data={postList}
        renderItem={renderItem}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        refreshing={isLoading}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refresh} />
        }
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={
          <HomeEmpty loading={isLoading} error={isError} refetch={refresh} />
        }
        keyExtractor={item => item.id.toString()}
      />
    </Screen>
  );
}

const $screen: ViewStyle = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
  flexGrow: 1,
};
