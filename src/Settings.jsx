import React from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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
          title: 'Settings',
          headerLeft: () => (
            <Pressable style={{ marginLeft: 15 }} onPress={() => props.navigation.toggleDrawer()}>
              <Ionicons name="md-menu" size={24} color="white" />
            </Pressable>
          )
        }}
      />
      <Stack.Screen
        name="FAQ"
        component={FAQ}
      />
    </Stack.Navigator>
  );
}