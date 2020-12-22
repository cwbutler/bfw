import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import useAWSUser from './useAWSUser';
import MembershipFee from './MembershipFee';
import HomeScreen from './HomeScreen';
import { useEffect } from 'react';

const Stack = createStackNavigator();

export default function AppNavigationStack() {
  const user = useAWSUser();
  const [subscribed, setSubscribed] = useState();

  useEffect(() => {
    setSubscribed(Number(user?.attributes['custom:subscribed']));
  }, [user]);

  return (
    <Stack.Navigator
      initialRouteName="Landing"
    >
      {(!subscribed) ? (
        <Stack.Screen
          name="Landing"
          options={{ headerShown: false }}
        >
          {() => <MembershipFee setSubscribed={setSubscribed} />}
        </Stack.Screen>
      ) : (
        <>
          <Stack.Screen
            name="Landing"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
