import React from 'react';
import { Authenticator } from 'aws-amplify-react-native';
import { StatusBar } from 'react-native';
import SignIn from './SignIn';

export default function Login({ navigation }) {
  const onChangeState = (state) => {
    if (state === 'signUp') navigation.navigate('SignUp');
  };

  return (
    <Authenticator
      hideDefault={true}
      onStateChange={onChangeState}
      usernameAttributes="email"
      theme={{ container: { flex: 1 } }}
    >
      <StatusBar barStyle="dark-content" />
      <SignIn override="SignIn" />
    </Authenticator>
  );
}
