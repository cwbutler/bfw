import React from 'react';
import FAQ from './FAQ';

import { createStackNavigator } from '@react-navigation/stack';
import SettingsHome from './SettingsHome';
import { primary_color } from './styles';

const Stack = createStackNavigator();
const defaultScreenOptions = {
  headerShown: true,
  headerStyle: {
    backgroundColor: primary_color,
  },
  headerTintColor: 'white'
};

export default function SettingsNavigationStack() {
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
    </Stack.Navigator>
  );
}