import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderBackButton } from '@react-navigation/stack';
import Landing from './Landing';
import Login from './Login';
import CommunityRules from './CommunityRules';
import MembershipFee from './MembershipFee';
import CreateAccount from './CreateAccount';
import { primary_color } from './styles';

const Stack = createStackNavigator();

function HeaderLeft(props) {
  const navigation = useNavigation();
  return <HeaderBackButton {...props} onPress={() => navigation.navigate('Landing')} />;
}

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
    </Stack.Navigator>
  );
}

export function SignUpNavigationStack() {
  return (
    <Stack.Navigator
      initialRouteName="CommunityRules"
      screenOptions={defaultScreenOptions}
    >
      <Stack.Screen
        name="CommunityRules"
        component={CommunityRules}
        options={{
          title: 'Community Rules',
          headerLeft: HeaderLeft
        }}
      />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{
          title: 'Create Profile'
        }}
      />
      <Stack.Screen
        name="MembershipFee"
        component={MembershipFee}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

