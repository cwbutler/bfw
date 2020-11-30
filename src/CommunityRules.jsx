import React from 'react';
import { ScrollView, Pressable, Text, View } from 'react-native';
import BGScreen from './BackgroundScreen';

export default function CommunityRules() {
  return (
    <BGScreen statusBarStyle="dark-content">
      <ScrollView style={{ flex: 1, margin: 10, backgroundColor: '#fefefe', padding: 10 }}>
        <Text style={{ color: 'gray' }}>... Words ...</Text>
      </ScrollView>

      <View style={{ backgroundColor: 'gray', padding: 20, alignItems: 'center' }}>
        <Text style={{ color: 'white', textAlign: 'center', marginBottom: 22 }}>
          By proceeding you also agree to the Terms of Service and Privacy Policy.
        </Text>

        <Pressable 
          style={{ alignItems: 'center', borderRadius: 12, backgroundColor: 'orange', padding: 15, width: '100%' }}
        >
          <Text style={{ color: 'white', fontSize: 16 }}>Create Account</Text>
        </Pressable>
      </View>
    </BGScreen>
  );
}
