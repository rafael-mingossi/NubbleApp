import React from 'react';

import {Box, Icon, PressableBox, Text} from '@components';

import {OnboardingPageProps} from './OnboardingPage.tsx';

type BottomMenuProps = Pick<
  OnboardingPageProps,
  'onPressNext' | 'onPressSkip'
> & {
  isLast: boolean;
};

export function BottomMenu({
  onPressSkip,
  onPressNext,
  isLast,
}: BottomMenuProps) {
  const nextText = isLast ? "Let's go" : 'Next';
  return (
    <Box flexDirection="row" justifyContent="space-between">
      <PressableBox hitSlop={10} onPress={onPressSkip}>
        <Text semiBold color="gray2">
          Skip
        </Text>
      </PressableBox>
      <PressableBox
        hitSlop={10}
        flexDirection="row"
        alignItems="center"
        onPress={onPressNext}>
        <Text bold mr="s10">
          {nextText}
        </Text>
        <Icon name="arrowRight" color="carrotSecondary" />
      </PressableBox>
    </Box>
  );
}
