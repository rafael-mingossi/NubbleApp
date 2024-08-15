import React from 'react';
import {Button, Screen, Text, TextInput} from '@components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '@routes';
import {useResetNavigationSuccess} from '@hooks';

type ScreenProps = NativeStackScreenProps<
  RootStackParamsList,
  'ForgotPasswordScreen'
>;

export function ForgotPasswordScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();

  function recoverPassword() {
    reset({
      title: `We have sent the instructions to ${'\n'}your e-mail`,
      description:
        'Click on the link sent to your e-mail to reset your password',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
  }

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Forgot Password
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Enter your e-mail and we will send the instructions to reset your
        password
      </Text>
      <TextInput
        label="E-mail"
        placeholder="Enter your email"
        boxProps={{marginBottom: 's40'}}
      />
      <Button title="Recover Password" onPress={recoverPassword} />
    </Screen>
  );
}
