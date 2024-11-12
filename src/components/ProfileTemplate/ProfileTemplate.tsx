import React, {useState} from 'react';
import {Dimensions, Image, ListRenderItemInfo} from 'react-native';

import {Post, postService, useUserGetById} from '@domain';
import {QueryKeys} from '@infra';

import {InfinityScrollList} from '../InfinityScrollList/InfinityScrollList.tsx';
import {Screen} from '../Screen/Screen';

import {ProfileHeader} from './components/ProfileHeader.tsx';

const NUM_COLUMNS = 3;
const SCREEN_WIDTH = Dimensions.get('screen').width;
const ITEM_WIDTH = SCREEN_WIDTH / NUM_COLUMNS;

type Props = {
  userId: number;
  isMyProfile?: boolean;
};
export function ProfileTemplate({userId, isMyProfile}: Props) {
  const {user} = useUserGetById(userId);
  const [publicationCount, setPublicationCount] = useState(0);

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return (
      <Image
        source={{uri: item.imageURL}}
        style={{width: ITEM_WIDTH, aspectRatio: 1}}
      />
    );
  }

  function renderListHeader() {
    if (!user) {
      return null;
    }
    return (
      <ProfileHeader
        user={user}
        isMyProfile={isMyProfile}
        publicationCount={publicationCount.toString()}
      />
    );
  }

  async function getPostList(page: number) {
    const response = await postService.getList(page, userId);
    setPublicationCount(response.meta.total);
    return response;
  }

  return (
    <Screen flex={1}>
      <InfinityScrollList
        queryKey={[QueryKeys.PostList, userId]}
        getList={getPostList}
        renderItem={renderItem}
        flatListProps={{
          ListHeaderComponent: renderListHeader,
          numColumns: NUM_COLUMNS,
        }}
      />
    </Screen>
  );
}