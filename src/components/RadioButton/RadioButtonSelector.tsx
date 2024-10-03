import React from 'react';

import {Box, Separator} from '@components';

import {RadioButtonItem, RadioButtonItemProps} from './RadioButtonItem.tsx';

export function RadioButtonSelector({items}: {items: RadioButtonItemProps[]}) {
  return (
    <Box>
      {items.map((item, index) => (
        <Box key={item.label}>
          <RadioButtonItem {...item} />
          {index < items.length - 1 && <Separator />}
        </Box>
      ))}
    </Box>
  );
}
