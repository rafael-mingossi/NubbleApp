import React from 'react';

import {useAuthSignIn} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useToastService} from '@services';
import {useForm} from 'react-hook-form';

import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import {AuthScreenProps} from '@routes';

import {loginSchema, LoginSchema} from './loginSchema.ts';

export function LoginScreen({navigation}: AuthScreenProps<'LoginScreen'>) {
  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const {isLoading, signIn} = useAuthSignIn({
    onError: message => showToast({message, type: 'error'}),
  });
  const {showToast} = useToastService();

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPassword() {
    navigation.navigate('ForgotPasswordScreen');
  }

  function submitForm({email, password}: LoginSchema) {
    signIn({email, password});
  }

  return (
    <Screen>
      <Text preset="headingLarge" bold marginBottom="s8">
        Hello,
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Enter your credentials to sing in!
      </Text>

      <FormTextInput
        placeholder="E-mail"
        label="E-mail"
        boxProps={{marginBottom: 's20'}}
        name="email"
        control={control}
      />
      <FormPasswordInput
        control={control}
        name="password"
        label="Password"
        placeholder="Enter your password"
        boxProps={{marginBottom: 's10'}}
      />
      <Text
        color="primary"
        preset="paragraphSmall"
        bold
        marginBottom="s48"
        onPress={navigateToForgotPassword}>
        Forgot Password
      </Text>
      <Button
        title="Sign In"
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
        loading={isLoading}
      />
      <Button
        title="Sign Up"
        marginTop="s12"
        preset="outline"
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  );
}
