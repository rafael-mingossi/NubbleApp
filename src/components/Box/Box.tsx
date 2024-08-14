import {
  createBox,
  createRestyleComponent,
  layout,
  LayoutProps,
  border,
  BorderProps,
  spacing,
  SpacingProps,
  backgroundColor,
  BackgroundColorProps,
  spacingShorthand,
  SpacingShorthandProps,
} from '@shopify/restyle';
import {Theme} from '@theme';
import {
  TouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
} from 'react-native';
import React from 'react';

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;

export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme> &
  LayoutProps<Theme> &
  RNTouchableOpacityProps;
export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [layout, border, spacing, spacingShorthand, backgroundColor],
  TouchableOpacity,
);
