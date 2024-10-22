import React from 'react';

import {ActivityIndicator, Box, Button, Text} from '@components';

export interface EmptyListProps {
  loading: boolean;
  error: unknown;
  refetch: () => void;
  emptyMessage?: string;
  errorMessage?: string;
}

export function EmptyList({
  loading,
  error,
  refetch,
  emptyMessage = 'Your feed is empty!',
  errorMessage = 'It was not possible to load your feed',
}: EmptyListProps) {
  let component = <Text preset="paragraphMedium">{emptyMessage}</Text>;

  if (loading) {
    component = <ActivityIndicator color="primary" />;
  }

  if (error) {
    component = (
      <>
        <Text preset="paragraphMedium" mb="s12">
          {errorMessage}
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
