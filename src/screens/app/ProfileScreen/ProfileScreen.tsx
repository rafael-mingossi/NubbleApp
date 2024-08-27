import React from 'react';
import {RefreshControl, ScrollView} from 'react-native';

import {useUserGetById} from '@domain';

import {ActivityIndicator, Box, ProfileAvatar, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function ProfileScreen({route}: AppScreenProps<'ProfileScreen'>) {
  const userId = route.params.userId;

  const {isLoading, isFetching, isError, user, refetch} =
    useUserGetById(userId);

  return (
    <Screen canGoBack flex={1}>
      {isLoading && <ActivityIndicator />}
      {isError && <Text> Error when loading user profile</Text>}
      {user && (
        <ScrollView
          style={{flex: 1}}
          refreshControl={
            //When refreshing is used with isFetching, it will keep the loading on the screen
            <RefreshControl refreshing={isFetching} onRefresh={refetch} />
          }>
          <Box alignItems="center" flex={1}>
            <ProfileAvatar
              imageURL={user.profileUrl}
              size={64}
              borderRadius={24}
            />
            <Text preset="headingMedium" bold>
              {user.fullName}
            </Text>
            <Text>@{user.username}</Text>
          </Box>
        </ScrollView>
      )}
    </Screen>
  );
}
