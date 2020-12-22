import React from 'react';
import { Text, View, Image } from 'react-native';
import { Link } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import BackgroundScreen from './BackgroundScreen';
import { primary_color } from './styles';

export default function Landing() {
  return (
    <BackgroundScreen>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../assets/HomeLogo.png')} />
      </View>

      <View 
        style={{ 
          padding: 20, 
          backgroundColor: primary_color, 
          alignItems: 'center', 
          justifyContent: 'center',
          height: 200 
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
          <Link
            to="/SignUp"
            style={{ color: 'white', fontSize: 22, fontWeight: 'bold', marginRight: 10 }}
          >
            Get Started
          </Link>
          <Ionicons name="ios-arrow-forward" size={28} color="white" />
        </View>

        <Text style={{ fontSize: 16, color: 'white', marginBottom: 5 }}>
          Already have an account?
        </Text>
        <Link to="/Login" style={{ fontSize: 16, color: 'white', textDecorationLine: 'underline' }}>
          Sign In
        </Link>
      </View>
    </BackgroundScreen>
  );
}
