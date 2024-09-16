import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {User, useUserSearch} from '@domain';
import {useSearchHistoryService} from '@services';

import {Icon, ProfileUser, Screen, TextInput} from '@components';
import {useDebounce} from '@hooks';

import {SearchHistory} from './components/SearchHistory.tsx';

export function SearchScreen() {
  const [search, setSearch] = useState('');

  const debouncedSearch = useDebounce(search);
  const {addUser} = useSearchHistoryService();

  const {list} = useUserSearch(debouncedSearch);

  function renderItem({item}: ListRenderItemInfo<User>) {
    return (
      <ProfileUser
        avatarProps={{size: 48}}
        onPress={() => addUser(item)}
        user={item}
      />
    );
  }

  return (
    <Screen
      canGoBack
      HeaderComponent={
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="search for a user"
          LeftComponent={<Icon color="gray3" name="search" />}
        />
      }>
      {search.length === 0 ? (
        <SearchHistory />
      ) : (
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.username}
        />
      )}
    </Screen>
  );
}
