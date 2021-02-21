import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DrawerContent from './DrawerContent';
import DrawerToggle from './DrawerToggleBtn'; 
import Settings from './Settings';
import NewMessage from './NewAdminMessage';
import ListMembers from './ListUsers';
import Profile from './Profile';
import NotifyScreen from './Notifications';
import { primary_color } from './styles';

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const NotificationStack = createStackNavigator();

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

const Notifications = () => {
  return (
    <NotificationStack.Navigator
      initialRouteName="HomeNotify"
      screenOptions={defaultScreenOptions}
    >
      <NotificationStack.Screen
        name="HomeNotify"
        component={NotifyScreen}
        options={{
          headerLeft: () => <DrawerToggle />,
          title: "Notifications"
        }}
      />
    </NotificationStack.Navigator>
  );
};

const Member = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="ListMembers"
      screenOptions={defaultScreenOptions}
    >
      <HomeStack.Screen
        name="ListMembers" 
        component={ListMembers}
        options={{ 
          title: "Members",
          headerLeft: () => <DrawerToggle />
        }}
      />
      <HomeStack.Screen
        name="Profile"
        component={Profile}
        options={{ title: 'Member Profile' }}
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
        name="Notifications" 
        component={Notifications}
        options={{ 
          headerShown: false
        }}
      />  
      <Drawer.Screen
        name="ListMembers" 
        component={Member}
        options={{ 
          headerShown: false,
          title: 'Members'
        }}
      />  
      <Drawer.Screen
        name="Settings" 
        component={Settings}
        options={{ headerShown: false }}
      />  
    </Drawer.Navigator>
  );
}
