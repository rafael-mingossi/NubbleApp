import React from 'react';

import {
  ActivityIndicator,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
  Text,
} from '@components';

import {buttonPresets} from './buttonPresets.ts';

export type ButtonPreset = 'primary' | 'outline' | 'ghost' | 'gray';

export interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}

export function Button({
  title,
  loading,
  preset = 'primary',
  disabled,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];

  return (
    <TouchableOpacityBox
      testID="button"
      disabled={disabled || loading}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color="carrotSecondary" />
      ) : (
        <Text
          preset="paragraphMedium"
          bold
          color={buttonPreset.content.colour}
          {...buttonPreset.content.textProps}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
