import React from 'react';
import {
  Button,
  Icon,
  PasswordInput,
  Screen,
  Text,
  TextInput,
} from '@components';

export function SignUpScreen() {
  function submitForm() {}

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
