import React, { useState } from 'react';
import { Pressable, TextInput, View, Text } from 'react-native';

export default function PasswordInput(props) {
  const [showPassword, setShowPassword] = useState();

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: props.style.backgroundColor || 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      }}
    >
      <TextInput
        autoCapitalize="none"
        autoCompleteType="password"
        keyboardType={(showPassword) ? 'visible-password' : undefined}
        textContentType="password"
        secureTextEntry={!showPassword}
        {...props}
        style={[{ flex: 1 }, props.style]}
      />
      <Pressable 
        style={{ padding: 10, position: 'absolute', right: 0, height: '100%', justifyContent: 'center' }}
        onPress={() => setShowPassword(!showPassword)}
      >
        <Text style={{ color: 'black', fontSize: 12 }}>
          {(showPassword) ? 'Hide' : 'Show'}
        </Text>
      </Pressable>
    </View>
  );
}
