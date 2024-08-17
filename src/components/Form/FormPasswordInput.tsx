import React from 'react';
import {PasswordInput, PasswordInputProps} from '@components';
import {Controller, UseControllerProps, FieldValues} from 'react-hook-form';

export function FormPasswordInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...passwordInputProps
}: PasswordInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field, fieldState}) => (
        <PasswordInput
          errorMessage={fieldState.error?.message}
          value={field.value}
          onChangeText={field.onChange}
          {...passwordInputProps}
        />
      )}
    />
  );
}
