import React, { useState } from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';

export default function PasswordInput(props) {
  const [showPassword, setShowPassword] = useState();
  return (
    <View>
      <TextInput
        autoCapitalize="none"
        autoCompleteType="off"
        textContentType="password"
        secureTextEntry={!showPassword}
        {...props}
      />
      <Pressable>
        <Text>Sh</Text>
      </Pressable>
    </View>
  );
}
