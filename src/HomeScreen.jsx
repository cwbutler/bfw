import React from 'react';
import { Text, View } from 'react-native';
import BGView from './BackgroundScreen';
import useAWSUser from './useAWSUser';

export default function HomeScreen() {
  const user = useAWSUser();

  return (
    <BGView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: 'white', fontSize: 34 }}>Home</Text>
      </View>
    </BGView>
  );
}
