import React from 'react';
import { Text, View } from 'react-native';
import { Link } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import BackgroundScreen from './BackgroundScreen';

export default function Landing() {
  return (
    <BackgroundScreen>
      <View style={{ flex: 1 }} />

      <View 
        style={{ 
          padding: 20, 
          backgroundColor: 'darkorange', 
          alignItems: 'center', 
          justifyContent: 'center',
          height: 200 
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
          <Link
            to="/SignUp"
            style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginRight: 10 }}
          >
            Get Started
          </Link>
          <Ionicons name="ios-arrow-forward" size={22} color="white" />
        </View>

        <Text style={{ fontSize: 14, color: 'white' }}>
          Already have an account?{" "}
          <Link to="/Login" style={{ color: 'white' }}>Sign In</Link>
        </Text>
      </View>
    </BackgroundScreen>
  );
}
