import React, {useRef} from 'react';
import {FlatList, ListRenderItemInfo, ViewStyle} from 'react-native';

import {Post, postService} from '@domain';
import {QueryKeys} from '@infra';
import {useScrollToTop} from '@react-navigation/native';

import {InfinityScrollList, PostItem, Screen} from '@components';
import {AppTabScreenProps} from '@routes';

import {HomeHeader} from './components/HomeHeader.tsx';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  // BEFORE INFINITY SCROLL
  // const {
  //   isLoading,
  //   refresh,
  //   isError,
  //   list: postList,
  //   fetchNextPage,
  // } = usePostList();
  const flatListRef = useRef<FlatList<Post>>(null);
  useScrollToTop(flatListRef);

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={$screen}>
      <InfinityScrollList
        queryKey={QueryKeys.PostList}
        getList={postService.getList}
        renderItem={renderItem}
        flatListProps={{ListHeaderComponent: <HomeHeader />}}
      />

      {/*///// BEFORE INFINITY SCROLL*/}

      {/*<FlatList*/}
      {/*  ref={flatListRef}*/}
      {/*  contentContainerStyle={{flexGrow: 1}}*/}
      {/*  showsVerticalScrollIndicator={false}*/}
      {/*  data={postList}*/}
      {/*  renderItem={renderItem}*/}
      {/*  onEndReached={fetchNextPage}*/}
      {/*  onEndReachedThreshold={0.1}*/}
      {/*  refreshing={isLoading}*/}
      {/*  refreshControl={*/}
      {/*    <RefreshControl refreshing={isLoading} onRefresh={refresh} />*/}
      {/*  }*/}
      {/*  ListHeaderComponent={<HomeHeader />}*/}
      {/*  ListEmptyComponent={*/}
      {/*    <HomeEmpty loading={isLoading} error={isError} refetch={refresh} />*/}
      {/*  }*/}
      {/*  keyExtractor={item => item.id.toString()}*/}
      {/*/>*/}
    </Screen>
  );
}

const $screen: ViewStyle = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
  flexGrow: 1,
};
