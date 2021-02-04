import React from 'react';
import FAQ from './FAQ';
import EditAccount from './CreateAccount';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsHome from './SettingsHome';
import DrawerToggle from './DrawerToggleBtn';
import { primary_color } from './styles';

const Stack = createStackNavigator();
const defaultScreenOptions = {
  headerShown: true,
  headerStyle: {
    backgroundColor: primary_color,
  },
  headerTintColor: 'white',
  headerLeft: DrawerToggle
};

export default function SettingsNavigationStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="SettingsHome"
      screenOptions={defaultScreenOptions}
    >
      <Stack.Screen
        name="SettingsHome"
        component={SettingsHome}
        options={{
          title: 'Settings'
        }}
      />
      <Stack.Screen
        name="FAQ"
        component={FAQ}
      />
      <Stack.Screen
        name="EditUser"
        options={{ title: 'Edit User Info' }}
      >
        {x => <EditAccount {...x} editUser />}
      </Stack.Screen> 
    </Stack.Navigator>
  );
}