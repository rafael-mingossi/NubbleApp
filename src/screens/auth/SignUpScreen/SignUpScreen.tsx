import React from 'react';

import {useAuthSignUp} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  ActivityIndicator,
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps, AuthStackParamsList} from '@routes';

import {signUpSchema, SignUpSchema} from './signUpSchema.ts';
import {useAsyncValidation} from './useAsyncValidation.ts';

const resetParam: AuthStackParamsList['SuccessScreen'] = {
  title: 'Your account has been created successfully!',
  description: 'Now you can proceed with the login to our platform.',
  icon: {
    name: 'checkRound',
    color: 'success',
  },
};

let defaultValues = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export function SignUpScreen({navigation}: AuthScreenProps<'SignUpScreen'>) {
  console.log(navigation);
  const {reset} = useResetNavigationSuccess();
  const {signUp, isLoading} = useAuthSignUp({
    onSuccess: () => {
      reset(resetParam);
    },
  });
  const {control, formState, handleSubmit, watch, getFieldState} =
    useForm<SignUpSchema>({
      resolver: zodResolver(signUpSchema),
      defaultValues: defaultValues,
      mode: 'onChange',
    });

  const {usernameValidation, emailValidation} = useAsyncValidation({
    watch,
    getFieldState,
  });

  function submitForm(formValues: SignUpSchema) {
    signUp(formValues);
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
        errorMessage={usernameValidation.errorMessage}
        name={'username'}
        RightComponent={
          usernameValidation.isFetching ? (
            <ActivityIndicator size="small" />
          ) : undefined
        }
      />
      <FormTextInput
        label="First name"
        placeholder="Enter your first name"
        boxProps={{marginBottom: 's20'}}
        control={control}
        name={'firstName'}
      />
      <FormTextInput
        label="Last name"
        placeholder="Enter your last name"
        boxProps={{marginBottom: 's20'}}
        control={control}
        name={'lastName'}
      />
      <FormTextInput
        placeholder="E-mail"
        label="E-mail"
        errorMessage={emailValidation.errorMessage}
        boxProps={{marginBottom: 's20'}}
        name="email"
        control={control}
        RightComponent={
          emailValidation.isFetching ? (
            <ActivityIndicator size="small" />
          ) : undefined
        }
      />
      <FormPasswordInput
        control={control}
        name="password"
        label="Password"
        placeholder="Enter your password"
        boxProps={{marginBottom: 's48'}}
      />

      <Button
        loading={isLoading}
        disabled={
          !formState.isValid ||
          usernameValidation.notReady ||
          emailValidation.notReady
        }
        title="Create account"
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
