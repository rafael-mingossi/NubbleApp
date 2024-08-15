import React from 'react';
import {Button, PasswordInput, Screen, Text, TextInput} from '@components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '@routes';

type ScreenProps = NativeStackScreenProps<RootStackParamsList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPassword() {
    navigation.navigate('ForgotPasswordScreen');
  }

  return (
    <Screen>
      <Text preset="headingLarge" bold marginBottom="s8">
        Hello,
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Enter your credentials to sing in!
      </Text>
      <TextInput
        boxProps={{marginBottom: 's20'}}
        errorMessage="Error here in name"
        placeholder="E-mail"
        label="E-mail"
      />
      <PasswordInput
        label="Password"
        placeholder="Enter your password"
        boxProps={{marginBottom: 's48'}}
      />
      <Text
        color="primary"
        preset="paragraphSmall"
        bold
        marginBottom="s48"
        onPress={navigateToForgotPassword}>
        Forgot Password
      </Text>
      <Button title="Sign In" />
      <Button
        title="Sign Up"
        marginTop="s12"
        preset="outline"
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  );
}
