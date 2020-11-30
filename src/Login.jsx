import React from 'react';
import { Authenticator, SignIn, ForgotPassword } from 'aws-amplify-react-native';
import { StatusBar } from 'react-native';

export default function Login({ navigation }) {
  const onChangeState = (state) => {
    if (state === 'signUp') navigation.navigate('SignUp');
  };

  return (
    <Authenticator hideDefault={true} onStateChange={onChangeState}>
      <StatusBar barStyle="dark-content" />
      <SignIn />
      <ForgotPassword />
    </Authenticator>
  );
}
