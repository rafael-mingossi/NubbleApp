import React from 'react';

import {Box, RadioButton, RadioButtonProps, Text} from '@components';

export type RadioButtonItemProps = RadioButtonProps & {
  label: string;
  description?: string;
};

export function RadioButtonItem({
  label,
  description,
  ...radioButtonProps
}: RadioButtonItemProps) {
  return (
    <Box paddingVertical="s16">
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Text semiBold>{label}</Text>
        <RadioButton {...radioButtonProps} />
      </Box>
      {description && (
        <Text style={{width: '85%'}} color={'paragraphSecondary'}>
          {description}
        </Text>
      )}
    </Box>
  );
}
