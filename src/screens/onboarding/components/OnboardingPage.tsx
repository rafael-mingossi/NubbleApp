import React from 'react';
import {Dimensions} from 'react-native';

import {Box} from '@components';

import {OnboardingPageItem} from '../onboardingData.ts';

import {BottomMenu} from './BottomMenu.tsx';
import {Content} from './Content.tsx';
import {ImageHeader} from './ImageHeader.tsx';

export type OnboardingPageProps = {
  pageItem: OnboardingPageItem;
  onPressNext: () => void;
  onPressSkip: () => void;
};

const SCREEN_WIDTH = Dimensions.get('screen').width;

export function OnboardingPage({
  pageItem,
  onPressSkip,
  onPressNext,
}: OnboardingPageProps) {
  return (
    <Box flex={1} backgroundColor="background" width={SCREEN_WIDTH}>
      <Box flex={4}>
        <ImageHeader image={pageItem.image} />
      </Box>
      <Box flex={5} paddingHorizontal="s24">
        <Content {...pageItem} />
      </Box>
      <Box flex={1} paddingHorizontal="s24">
        <BottomMenu
          onPressNext={onPressNext}
          onPressSkip={onPressSkip}
          isLast={pageItem.isLast}
        />
      </Box>
    </Box>
  );
}
