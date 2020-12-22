import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Auth } from 'aws-amplify';
import BGView from './BackgroundScreen';

export default function HomeScreen() {
  return (
    <BGView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: 'white', fontSize: 34 }}>Home</Text>

        <Pressable onPress={() => Auth.signOut()}>
          <Text style={{ color: 'white' }}>Log Out</Text>
        </Pressable>
      </View>
    </BGView>
  );
}
