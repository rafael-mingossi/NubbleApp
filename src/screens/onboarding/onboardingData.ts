import {ImageProps} from 'react-native';

import {images} from '@assets';

export type OnboardingPageItem = {
  title: Array<{text: string; highlight: boolean}>;
  subtitle: string;
  image: {
    light: ImageProps['source'];
    dark: ImageProps['source'];
  };
  index: number;
  total: number;
  isLast: boolean;
};

type OnboardingPageItemWithoutMeta = Omit<
  OnboardingPageItem,
  'index' | 'total' | 'isLast'
>;

const page1: OnboardingPageItemWithoutMeta = {
  title: [
    {text: 'A social network with ', highlight: false},
    {text: 'real connections', highlight: true},
  ],
  subtitle: 'Stay tuned for what is happening with people you like the most',
  image: {
    light: images.onboardingLight1,
    dark: images.onboardingDark1,
  },
};

const page2: OnboardingPageItemWithoutMeta = {
  title: [
    {text: 'Share your', highlight: false},
    {text: '\nstories ', highlight: true},
    {text: 'with your \nclosest friends', highlight: false},
  ],
  subtitle: 'Have your own stories',
  image: {
    light: images.onboardingLight2,
    dark: images.onboardingDark2,
  },
};

const page3: OnboardingPageItemWithoutMeta = {
  title: [
    {text: 'Interact ', highlight: true},
    {text: 'with people \nin real time', highlight: false},
  ],
  subtitle: 'Like, comment and favourite the things you like the most',
  image: {
    light: images.onboardingLight3,
    dark: images.onboardingDark3,
  },
};

export const onboardingPages: OnboardingPageItem[] = [page1, page2, page3].map(
  (page, index, array) => ({
    ...page,
    index,
    total: array.length,
    isLast: index + 1 === array.length,
  }),
);
