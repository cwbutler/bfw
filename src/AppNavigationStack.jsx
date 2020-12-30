import React, { useContext, useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AWSUserContext } from './useAWSUser';
import DrawerNavigator from './DrawerNavigator';
import MembershipFee from './MembershipFee';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

export default function AppNavigationStack() {
  const user = useContext(AWSUserContext);
  const [subscribed, setSubscribed] = useState(true);

  useEffect(() => {
    //setSubscribed(Number(user?.attributes['custom:subscribed']));
  }, [user]);

  return (!subscribed) ? (
    <Stack.Navigator
      initialRouteName="Landing"
    >
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="Landing"
        options={{ headerShown: false }}
      >
        {() => <MembershipFee setSubscribed={setSubscribed} />}
      </Stack.Screen>
    </Stack.Navigator>
  ) : <DrawerNavigator />;
}
