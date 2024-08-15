import React from 'react';
import {Button, PasswordInput, Screen, Text, TextInput} from '@components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '@routes';
import {useResetNavigationSuccess} from '@hooks';

type ScreenProps = NativeStackScreenProps<RootStackParamsList, 'SignUpScreen'>;

export function SignUpScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();

  function submitForm() {
    reset({
      title: 'Your account has been created successfully!',
      description: 'Now you can proceed with the login to our platform.',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    });
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Create an account
      </Text>
      <TextInput
        label="Your username"
        placeholder="@"
        boxProps={{marginBottom: 's20'}}
      />
      <TextInput
        label="Full name"
        placeholder="Enter your full name"
        boxProps={{marginBottom: 's20'}}
      />
      <TextInput
        label="E-mail"
        placeholder="Enter your email"
        boxProps={{marginBottom: 's20'}}
      />
      <PasswordInput
        label="Password"
        placeholder="Enter your password"
        boxProps={{marginBottom: 's48'}}
      />
      <Button title="Create account" onPress={submitForm} />
    </Screen>
  );
}
