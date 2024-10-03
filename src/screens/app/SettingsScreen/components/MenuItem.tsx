import React from 'react';

import {Icon, PressableBox, Text} from '@components';

export type MenuItemProps = {
  label: string;
  onPress: () => void;
};

export function MenuItem({label, onPress}: MenuItemProps) {
  return (
    <PressableBox
      onPress={onPress}
      justifyContent="space-between"
      alignItems="center"
      paddingVertical="s16"
      flexDirection="row">
      <Text preset="paragraphMedium">{label}</Text>
      <Icon name="chevronRight" />
    </PressableBox>
  );
}
