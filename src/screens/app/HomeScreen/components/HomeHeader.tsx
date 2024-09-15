import React from 'react';

import {SimpleLogo} from '@brand';
import {useNavigation} from '@react-navigation/native';

import {Box, BoxProps, Icon} from '@components';
import {useAppSafeArea} from '@hooks';

export function HomeHeader() {
  const {top} = useAppSafeArea();
  const navigation = useNavigation();

  function navigateToSearchScreen() {
    navigation.navigate('SearchScreen');
  }
  return (
    <Box {...$wrapper} style={{marginTop: top}}>
      <SimpleLogo width={70} />
      <Box flexDirection="row" columnGap="s24">
        <Icon name="search" onPress={navigateToSearchScreen} />
        <Icon name="bell" />
        <Icon name="comment" />
      </Box>
    </Box>
  );
}

const $wrapper: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 's24',
  paddingBottom: 's24',
};
