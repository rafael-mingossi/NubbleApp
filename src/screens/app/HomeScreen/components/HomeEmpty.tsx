import React from 'react';

import {ActivityIndicator, Box, Button, Text} from '@components';

interface Props {
  loading: boolean;
  error: unknown;
  refetch: () => void;
}

export function HomeEmpty({loading, error, refetch}: Props) {
  let component = <Text preset="paragraphMedium">Feed is Empty!</Text>;

  if (loading) {
    component = <ActivityIndicator color="primary" />;
  }

  if (error) {
    component = (
      <>
        <Text preset="paragraphMedium" mb="s12">
          An error occurred!
        </Text>
        <Button title="Refetch" preset="outline" onPress={refetch} />
      </>
    );
  }

  return (
    <Box flexGrow={1} alignItems="center" justifyContent="center">
      {component}
    </Box>
  );
}
