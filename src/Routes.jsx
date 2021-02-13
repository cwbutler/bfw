import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AWSUserContext } from './useAWSUser';
import Providers from './Providers';
import AuthStack from './AuthNavigationStack';
import AppStack from './AppNavigationStack';
import useUpdates from './useUpdates';
import useNotifications from './useNotification';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Providers>
      <Stack.Navigator
        initialRouteName="App"
      >
        <Stack.Screen
          name="App"
          component={AppNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </Providers>
  );
}

function AppNavigation() {
  const user = useContext(AWSUserContext);

  useUpdates();
  useNotifications();

  return (user?.attributes) ? <AppStack /> : <AuthStack />;
}
