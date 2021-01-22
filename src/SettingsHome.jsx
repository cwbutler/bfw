import React from 'react';
import { Pressable, Switch, Text, View } from 'react-native';
import { Link } from '@react-navigation/native';
import BGScreen from './BackgroundScreen';
import { primary_color } from './styles';
import config from '../app.json';

export default function SettingsHome({ navigation }) {
  return (
    <BGScreen contentStyle={{ backgroundColor: 'lightgray' }}>
      <Text style={{ padding: 10 }}>GENERAL</Text>

      <View>
        <ListItem>
          <ListLabel>Edit User Info</ListLabel>
        </ListItem>
        <ListItem>
          <ListLabel>Edit Payment Info</ListLabel>
        </ListItem>
        {/*<ListItem>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <ListLabel>Notification</ListLabel>
            <Switch
              trackColor={{ false: '#000', true: primary_color }}
              ios_backgroundColor="#000"
              value={false}
            />
          </View>
        </ListItem>*/}
        <ListItem onPress={() => navigation.navigate('FAQ')}>
          <ListLabel>FAQ</ListLabel>
          <ListLabelSubtitle>
            Answers to commonly asked questions
          </ListLabelSubtitle>
        </ListItem>
        <ListItem>
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
