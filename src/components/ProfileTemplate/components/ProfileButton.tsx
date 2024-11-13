import React from 'react';

// import {useNavigation} from '@react-navigation/native';

import {Button, ButtonProps} from '../../Button/Button';

type ButtonVariants = 'myProfile' | 'isFollowing' | 'isNotFollowing';

const buttonVariants: Record<
  ButtonVariants,
  Pick<ButtonProps, 'title' | 'preset'>
> = {
  myProfile: {
    title: 'Edit Profile',
    preset: 'gray',
  },
  isFollowing: {
    title: 'Message',
    preset: 'primary',
  },
  isNotFollowing: {
    title: 'Follow',
    preset: 'outline',
  },
};

type ProfileButtonProps = {
  isMyProfile?: boolean;
  isFollowing?: boolean;
  userId: number;
};
export function ProfileButton({
  isFollowing,
  isMyProfile,
  userId,
}: ProfileButtonProps) {
  // const navigation = useNavigation();

  const variant = getVariant({isFollowing, isMyProfile});
  const buttonProps = buttonVariants[variant];

  function handleOnPress() {
    if (isMyProfile) {
      // navigation.navigate('EditProfileScreen', {userId});
      console.log(userId);
    }
  }

  return (
    <Button marginVertical="s24" onPress={handleOnPress} {...buttonProps} />
  );
}

function getVariant({
  isFollowing,
  isMyProfile,
}: Pick<ProfileButtonProps, 'isFollowing' | 'isMyProfile'>): ButtonVariants {
  if (isMyProfile) {
    return 'myProfile';
  }
  if (isFollowing) {
    return 'isFollowing';
  }

  return 'isNotFollowing';
}
