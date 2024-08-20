import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {Button, FormTextInput, Screen, Text} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps} from '@routes';

import {
  forgotPasswordSchema,
  ForgotPasswordSchema,
} from './forgotPasswordSchema.ts';

export function ForgotPasswordScreen({
  navigation,
}: AuthScreenProps<'ForgotPasswordScreen'>) {
  console.log(navigation);
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
