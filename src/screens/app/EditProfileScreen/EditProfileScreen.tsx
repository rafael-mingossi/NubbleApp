import React, {useRef, useState} from 'react';

import {useUserGetById} from '@domain';

import {Button, InputButton, Screen} from '@components';
import {AppScreenProps} from '@routes';

import {
  EditProfileForm,
  EditProfileFormRef,
} from './components/EditProfileForm.tsx';
import {EditProfileHeader} from './components/EditProfileHeader.tsx';

export function EditProfileScreen({
  route,
  navigation,
}: AppScreenProps<'EditProfileScreen'>) {
  const {user} = useUserGetById(route.params.userId);
  const [formIsValid, setFormIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef<EditProfileFormRef>(null);

  function submitForm() {
    formRef.current?.onSubmit();
  }

  return (
    <Screen canGoBack scrollable title="Editar Perfil">
      <EditProfileHeader user={user} mb="s24" />
      {user && (
        <EditProfileForm
          ref={formRef}
          user={user}
          onChangeIsValid={setFormIsValid}
          onChangeIsLoading={setIsLoading}
        />
      )}
      {user && (
        <>
          <InputButton
            mb="s16"
            label={'email'}
            value={user?.email}
            onPress={() =>
              navigation.navigate('EditEmailScreen', {
                userId: route.params.userId,
              })
            }
          />
          <InputButton
            label={'password'}
            value={'******'}
            onPress={() =>
              navigation.navigate('EditPasswordScreen', {
                userId: route.params.userId,
              })
            }
          />
        </>
      )}
      <Button
        title="Save changes"
        onPress={submitForm}
        disabled={!formIsValid}
        mt="s40"
        loading={isLoading}
      />
    </Screen>
  );
}
