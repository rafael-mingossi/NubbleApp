import React, {useState} from 'react';

import {useUserSearch} from '@domain';

import {Icon, Screen, Text, TextInput} from '@components';
import {useDebounce} from '@hooks';

export function SearchScreen() {
  const [search, setSearch] = useState('');

  const debouncedSearch = useDebounce(search);

  const {list} = useUserSearch(debouncedSearch);

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
      <Text>{list.map(user => user.firstName)}</Text>
    </Screen>
  );
}
