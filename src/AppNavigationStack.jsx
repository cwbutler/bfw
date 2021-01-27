import React, { useContext, useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AWSUserContext } from './useAWSUser';
import DrawerNavigator from './DrawerNavigator';
import MembershipFee from './MembershipFee';
import CommunityRules from './CommunityRules';
import Welcome from './Welcome';
import useNotifications from './useNotification';
import { primary_color } from './styles';

const Stack = createStackNavigator();
const defaultScreenOptions = { 
  headerStyle: { backgroundColor: primary_color },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default function AppNavigationStack() {
  const user = useContext(AWSUserContext);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    if (user?.attributes) {
      setSubscribed(Number(user.attributes['custom:subscribed']));
    }
  }, []);

  useNotifications();

  return (!subscribed) ? (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={defaultScreenOptions}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CommunityRules"
        component={CommunityRules}
        options={{
          title: 'Community Rules'
        }}
      />
      <Stack.Screen
        name="Subscribe"
        options={{ headerShown: false }}
      >
        {() => <MembershipFee setSubscribed={setSubscribed} />}
      </Stack.Screen>
    </Stack.Navigator>
  ) : <DrawerNavigator />;
}
