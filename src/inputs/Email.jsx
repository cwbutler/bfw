import React from 'react';
import { TextInput } from 'react-native';

export default function EmailInput(props) {
  return (
    <TextInput
      autoCapitalize="none"
      autoCompleteType="email"
      keyboardType="email-address"
      textContentType="emailAddress"
      {...props}
    />
  );
}
