import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import BG from './BackgroundScreen';
import welcomeImage from '../assets/welcome.png';

export default function Welcome({ navigation }) {
  return (
    <BG contentStyle={{ padding: 15 }}>
      <View style={{ flexDirection: 'column', flex: 1 }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 34, fontWeight: 'bold', marginTop: 25 }}>
          Welcome to the Community
        </Text>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <Image source={welcomeImage} style={{ width: 300 }} resizeMode="contain" />
        </View>

        <View style={{ backgroundColor: '#1c1c1c', padding: 20, marginBottom: 12 }}>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>
            Make your goal more than money.
          </Text>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>
            Make it about helping people and creating a better future.
          </Text>
        </View>

        <Pressable
          style={{ padding: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
          onPress={() => navigation.navigate('CommunityRules')}
        >
          <Text style={{ color: 'white', fontSize: 30, textAlign: 'center', fontWeight: 'bold' }}>
            Next
          </Text>
          <MaterialIcons name="keyboard-arrow-right" size={30} color="white" />
        </Pressable>
      </View>
    </BG>
  );
}
