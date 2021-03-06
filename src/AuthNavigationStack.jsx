import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './Landing';
import Login from './SignIn';
import CreateAccount from './CreateAccount';
import ConfirmUser from './ConfirmUser';
import ForgotPassword from './ForgotPassword';
import { primary_color } from './styles';

const Stack = createStackNavigator();

const defaultScreenOptions = {
  headerBackTitle: ' ', 
  headerStyle: { backgroundColor: primary_color},
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default function AuthNavigationStack() {
  return (
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={defaultScreenOptions}
    >
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ 
          title: 'Sign In',
          headerBackTitle: ' ', 
          headerStyle: { backgroundColor: primary_color},
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpNavigationStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VerifyAccount"
        component={ConfirmUser}
        options={{
          title: 'Verify Account'
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          title: 'Reset Password'
        }}
      />
    </Stack.Navigator>
  );
}

export function SignUpNavigationStack() {
  return (
    <Stack.Navigator
      initialRouteName="CreateAccount"
      screenOptions={defaultScreenOptions}
    >
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{
          title: 'Create Profile'
        }}
      />
      <Stack.Screen
        name="VerifyAccount"
        component={ConfirmUser}
        options={{
          title: 'Verify Account'
        }}
      />
    </Stack.Navigator>
  );
}

