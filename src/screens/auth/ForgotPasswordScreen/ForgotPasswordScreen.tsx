import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {Button, FormTextInput, Screen, Text} from '@components';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {RootStackParamsList} from '@routes';
import {useResetNavigationSuccess} from '@hooks';

import {
  forgotPasswordSchema,
  ForgotPasswordSchema,
} from './forgotPasswordSchema.ts';

// type ScreenProps = NativeStackScreenProps<
//   RootStackParamsList,
//   'ForgotPasswordScreen'
// >;

// {navigation}: ScreenProps
export function ForgotPasswordScreen() {
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

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
      <FormTextInput
        placeholder="E-mail"
        label="E-mail"
        boxProps={{marginBottom: 's40'}}
        name="email"
        control={control}
      />
      <Button
        disabled={!formState.isValid}
        title="Recover Password"
        onPress={handleSubmit(recoverPassword)}
      />
    </Screen>
  );
}
