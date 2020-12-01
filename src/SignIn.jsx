import React from 'react';
import { Text, View } from 'react-native';
import BGScreen from './BackgroundScreen';
import { primary_color } from './styles';

export default function SignIn() {
  return (
    <BGScreen>
      <View style={{ marginTop: 75, marginBottom: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
          Welcome Back
        </Text>
        <Text style={{ fontSize: 18, color: 'gray', textAlign: 'center', marginTop: 10 }}>
          Sign in to access Black Family Wealth Community
        </Text>
      </View>
    </BGScreen>
  );
}
