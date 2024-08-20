import React from 'react';

import {Button, Icon, Screen, Text} from '@components';
import {AuthScreenProps} from '@routes';

export function SuccessScreen({
  route,
  navigation,
}: AuthScreenProps<'SuccessScreen'>) {
  function goBackToStart() {
    navigation.goBack();
  }

  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text preset="headingLarge" bold mt="s24">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {route.params.description}
      </Text>
      <Button
        preset="primary"
        title={'Go back'}
        mt="s40"
        onPress={goBackToStart}
      />
    </Screen>
  );
}
