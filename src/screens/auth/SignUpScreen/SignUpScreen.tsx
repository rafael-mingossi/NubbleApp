import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps} from '@routes';

import {signUpSchema, SignUpSchema} from './signUpSchema.ts';

export function SignUpScreen({navigation}: AuthScreenProps<'SignUpScreen'>) {
  console.log(navigation);
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

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
      <FormTextInput
        label="Your username"
        placeholder="@"
        boxProps={{marginBottom: 's20'}}
        control={control}
        name={'username'}
      />
      <FormTextInput
        label="Full name"
        placeholder="Enter your full name"
        boxProps={{marginBottom: 's20'}}
        control={control}
        name={'fullName'}
      />
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
        boxProps={{marginBottom: 's48'}}
      />

      <Button
        disabled={!formState.isValid}
        title="Create account"
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
