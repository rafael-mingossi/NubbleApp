import React from 'react';

import {Box, Icon, Text} from '@components';

export function BottomMenu() {
  return (
    <Box flexDirection="row" justifyContent="space-between">
      <Text>Skip</Text>
      <Box flexDirection="row" alignItems="center">
        <Text mr="s10">Next</Text>
        <Icon name="arrowRight" />
      </Box>
    </Box>
  );
}
