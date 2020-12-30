import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import DrawerContent from './DrawerContent';    
import { primary_color } from './styles';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: primary_color,
        },
        headerTintColor: 'black'
      }}
      drawerContent={DrawerContent}
      drawerStyle={{ backgroundColor: '#1d1d1f' }}
      drawerContentOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'white'
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
