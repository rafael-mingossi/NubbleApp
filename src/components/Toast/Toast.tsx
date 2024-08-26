import React, {useEffect} from 'react';
import {Dimensions} from 'react-native';

import {useToast} from '@services';

import {Box, BoxProps, Icon, Text} from '@components';
import {$shadowProps} from '@theme';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

export function Toast() {
  const {toast, hideToast} = useToast();

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        hideToast();
      }, 1500);
    }
  }, [hideToast, toast]);

  if (!toast) {
    return null;
  }

  return (
    <Box top={100} {...$boxStyle}>
      <Icon name="checkRound" color="success" />
      <Text preset="paragraphMedium" bold style={{flexShrink: 1}}>
        {toast?.message}
      </Text>
    </Box>
  );
}

const $boxStyle: BoxProps = {
  backgroundColor: 'grayWhite',
  position: 'absolute',
  padding: 's16',
  borderRadius: 's16',
  columnGap: 's16',
  alignItems: 'center',
  alignSelf: 'center',
  flexDirection: 'row',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
  style: {...$shadowProps},
};
