import React from 'react';
import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '@routes';
import {useForm} from 'react-hook-form';
import {Alert} from 'react-native';
import {loginSchema, LoginSchema} from './loginSchema.ts';
import {zodResolver} from '@hookform/resolvers/zod';

type ScreenProps = NativeStackScreenProps<RootStackParamsList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPassword() {
    navigation.navigate('ForgotPasswordScreen');
  }

  function submitForm({email, password}: LoginSchema) {
    Alert.alert(`EMAIL: ${email} ${`\n`} PASSWORD: ${password}`);
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
