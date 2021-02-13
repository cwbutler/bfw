import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DrawerContent from './DrawerContent';
import DrawerToggle from './DrawerToggleBtn'; 
import Settings from './Settings';
import NewMessage from './NewAdminMessage';
import ListMembers from './ListUsers';
import { primary_color } from './styles';

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();

const defaultScreenOptions = {
  headerShown: true,
  headerStyle: {
    backgroundColor: primary_color,
  },
  headerTintColor: 'white'
};

const Home = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={defaultScreenOptions}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitleStyle: { display: 'none' },
          headerLeft: () => <DrawerToggle />
        }}
      />
      <HomeStack.Screen
        name="NewMessage"
        component={NewMessage}
        options={{
          title: 'New Message',
          headerBackTitle: ' '
        }}
      />
    </HomeStack.Navigator>
  );
};

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={defaultScreenOptions}
      drawerContent={DrawerContent}
      drawerStyle={{ backgroundColor: '#1d1d1f' }}
      drawerContentOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'white'
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="Settings" 
        component={Settings}
        options={{ headerShown: false }}
      />  
      <Drawer.Screen
        name="ListMembers" 
        component={ListMembers}
        options={{ title: "Members" }}
      />  
    </Drawer.Navigator>
  );
}
