import React from 'react';
import { ScrollView, Pressable, Text, View } from 'react-native';
import HTML from "react-native-render-html";
import userAgreement from './BFWUserLicenseAgreement';
import privacyPolicy from './BFWPrivacyPolicy';
import BGScreen from './BackgroundScreen';
import { primary_color } from './styles';

export default function CommunityRules({ navigation }) {
  return (
    <BGScreen statusBarStyle="dark-content">
      <ScrollView style={{ flex: 1, margin: 10, backgroundColor: '#fefefe', padding: 10 }}>
        <HTML source={{ html: userAgreement }} />
        <HTML source={{ html: privacyPolicy }} />
      </ScrollView>

      <View style={{ backgroundColor: 'gray', padding: 20, alignItems: 'center' }}>
        <Text style={{ color: 'white', textAlign: 'center', marginBottom: 22 }}>
          By proceeding you also agree to the Terms of Service and Privacy Policy.
        </Text>

        <Pressable 
          style={{ alignItems: 'center', borderRadius: 12, backgroundColor: primary_color, padding: 15, width: '100%' }}
          onPress={() => navigation.navigate('Subscribe')}
        >
          <Text style={{ color: 'white', fontSize: 16 }}>Continue</Text>
        </Pressable>
      </View>
    </BGScreen>
  );
}
