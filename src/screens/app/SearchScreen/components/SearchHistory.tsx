import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {User} from '@domain';
import {useSearchHistory, useSearchHistoryService} from '@services';

import {Box, Icon, ProfileUser, Text} from '@components';

export function SearchHistory() {
  const userList = useSearchHistory();
  const {removeUser} = useSearchHistoryService();
  function renderItem({item}: ListRenderItemInfo<User>) {
    return (
      <ProfileUser
        user={item}
        avatarProps={{size: 48}}
        RightComponent={
          <Icon
            name="trash"
            onPress={() => removeUser(item.id)}
            color="primary"
          />
        }
      />
    );
  }
  return (
    <Box>
      <FlatList
        ListHeaderComponent={
          <Text mb="s16" preset="headingMedium">
            Recent Searches
          </Text>
        }
        data={userList}
        renderItem={renderItem}
      />
    </Box>
  );
}
