import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BGScreen from './BackgroundScreen';
import { primary_color } from './styles';

export default function MembershipFee() {
  return (
    <BGScreen>
      <Text style={{ fontSize: 40, color: 'white', fontWeight: 'bold', textAlign: 'center', margin: 18 }}>
        MEMBERSHIP
      </Text>

      <View style={{ margin: 16, backgroundColor: 'slategray', padding: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 40, color: 'white', textAlign: 'center', marginRight: 6 }}>
            $5.99
          </Text>
          <Text style={{ fontSize: 26, color: 'white', marginTop: 2 }}>
            /month
          </Text>
        </View>

        <View style={{ height: 140, marginBottom: 20 }} />
      </View>
      
      <View 
        style={{ flex: 1, backgroundColor: primary_color, marginTop: 14, borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
      >
        <View style={{ flex: 1 }}>

        </View>
        <Pressable style={{ flexDirection: 'row', margin: 30, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontSize: 22, textAlign: 'center', fontWeight: 'bold', flex: 1 }}>
            Continue
          </Text>
          <Ionicons name="ios-arrow-forward" size={30} color="white" />
        </Pressable>
      </View>
    </BGScreen>
  );
}
