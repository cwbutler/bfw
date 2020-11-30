import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderBackButton } from '@react-navigation/stack';
import Landing from './Landing';
import Login from './Login';
import CommunityRules from './CommunityRules';

const Stack = createStackNavigator();

function HeaderLeft(props) {
  const navigation = useNavigation();
  return <HeaderBackButton {...props} onPress={() => navigation.navigate('Landing')} />;
}

export default function AuthNavigationStack() {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ 
          headerBackTitle: " ", 
          headerStyle: { backgroundColor: 'orange'},
          headerTitleStyle: { color: 'white'}
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpNavigationStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export function SignUpNavigationStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'orange' },
        headerBackTitle: ' ',
        headerTitleStyle: { color: 'white' }
      }}
    >
      <Stack.Screen
        name="CommunityRules"
        component={CommunityRules}
        options={{
          title: 'Community Rules',
          headerLeft: HeaderLeft
        }}
      />
    </Stack.Navigator>
  );
}

