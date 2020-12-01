import React from 'react';
import { Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BGScreen from './BackgroundScreen';
import { primary_color } from './styles';

export default function MembershipFee() {
  return (
    <BGScreen
      backgroundStyle={{ backgroundColor: primary_color }}
      contentStyle={{ padding: 30, alignItems: 'center', justifyContent: 'center' }}
    >
      <Text style={{ fontSize: 40, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
        MEMBERSHIP
      </Text>

      <Text style={{ fontSize: 35, color: 'white', marginBottom: 60 }}>
        $5.99 /month
      </Text>

      <Pressable style={{ flexDirection: 'row', marginTop: 30, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: 'white', fontSize: 22, textAlign: 'center', fontWeight: 'bold', marginRight: 15 }}>
          Continue to PayPal
        </Text>
        <Ionicons name="ios-arrow-forward" size={22} color="white" />
      </Pressable>
    </BGScreen>
  );
}
