import React, { useContext, useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AWSUserContext } from './useAWSUser';
import MembershipFee from './MembershipFee';
import HomeScreen from './HomeScreen';
import { primary_color } from './styles';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: primary_color,
        },
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerTitleStyle: { display: 'none' } }}
      />
    </Drawer.Navigator>
  );
}

export default function AppNavigationStack() {
  const user = useContext(AWSUserContext);
  const [subscribed, setSubscribed] = useState();

  useEffect(() => {
    setSubscribed(Number(user?.attributes['custom:subscribed']));
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
