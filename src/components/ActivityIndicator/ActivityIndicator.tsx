import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';

import {useAppTheme} from '@hooks';
import {ThemeColours} from '@theme';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color?: ThemeColours;
}

export function ActivityIndicator({color = 'primary'}: Props) {
  const {colors} = useAppTheme();

  return <RNActivityIndicator color={colors[color]} />;
}
