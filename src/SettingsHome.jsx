import React, { useState, useEffect } from 'react';
import { Pressable, Switch, Text, View } from 'react-native';
import BGScreen from './BackgroundScreen';
import { primary_color } from './styles';
import config from '../app.json';
import { registerForPushNotificationsAsync } from './utils';
import * as Notifications from 'expo-notifications';
//import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';

export default function SettingsHome({ navigation }) {
  const [notifStatus, setNotifStatus] = useState();
  useEffect(() => {
    Notifications.getPermissionsAsync()
      .then(({ status }) => {
        setNotifStatus(status);
      });
  }, []);

  return (
    <BGScreen contentStyle={{ backgroundColor: 'lightgray' }}>
      <Text style={{ padding: 10 }}>GENERAL</Text>

      <View>
        <ListItem onPress={() => navigation.navigate('EditUser')}>
          <ListLabel>Edit User Info</ListLabel>
        </ListItem>
        <ListItem>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <ListLabel>Notification</ListLabel>
            <Switch
              trackColor={{ false: '#000', true: primary_color }}
              ios_backgroundColor="#000"
              value={notifStatus === 'granted'}
              onPress={async () => await registerForPushNotificationsAsync()}
            />
          </View>
        </ListItem>
        <ListItem onPress={() => navigation.navigate('FAQ')}>
          <ListLabel>FAQ</ListLabel>
          <ListLabelSubtitle>
            Answers to commonly asked questions
          </ListLabelSubtitle>
        </ListItem>
        <ListItem onPress={() => WebBrowser.openBrowserAsync('https://www.thebfwapp.com/')}>
          <ListLabel>Invite Friends</ListLabel>
          <ListLabelSubtitle>
            Get Shareable Link
          </ListLabelSubtitle>
        </ListItem>
        <ListItem>
          <ListLabelSubtitle>
            Software Version: {config.expo.version}
          </ListLabelSubtitle>
        </ListItem>
      </View>
    </BGScreen> 
  );
}

function ListItem({ children, onPress }) {
  return (
    <Pressable 
      style={{ 
        backgroundColor: 'white', 
        padding: 10, 
        paddingTop: 16, 
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderColor: 'lightgray'
      }}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
}

function ListLabel({ children }) {
  return (
    <Text style={{ fontSize: 16 }}>
      {children}
    </Text>
  )
}

function ListLabelSubtitle({ children }) {
  return (
    <Text style={{ fontSize: 12, color: 'gray' }}>
      {children}
    </Text>
  )
}
