import React from 'react';
import {GestureResponderEvent} from 'react-native';

import {User} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {
  PressableBox,
  ProfileAvatar,
  Text,
  PressableBoxProps,
  ProfileAvatarProps,
} from '@components';

type ProfileUserProps = {
  user: Pick<User, 'username' | 'profileUrl' | 'id'>;
  avatarProps?: Omit<Partial<ProfileAvatarProps>, 'imageURL'>;
} & PressableBoxProps;

export function ProfileUser({
  user,
  onPress,
  avatarProps,
  ...pressableBoxProps
}: ProfileUserProps) {
  const navigation = useNavigation();

  function handleOnPress(event: GestureResponderEvent) {
    if (onPress) {
      onPress(event);
    }
    navigation.navigate('ProfileScreen', {userId: user.id});
  }

  return (
    <PressableBox
      flexDirection="row"
      alignItems="center"
      mb="s16"
      onPress={handleOnPress}
      {...pressableBoxProps}>
      <ProfileAvatar {...avatarProps} imageURL={user.profileUrl} />
      <Text ml="s12" semiBold preset="paragraphMedium">
        {user.username}
      </Text>
    </PressableBox>
  );
}
