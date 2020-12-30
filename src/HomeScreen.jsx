import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { AWSUserContext } from './useAWSUser';
import BGView from './BackgroundScreen';
import Avatar from './Avatar';

export default function HomeScreen() {
  const user = useContext(AWSUserContext);

  return (
    <BGView statusBarStyle="dark-content">
      <View style={{ alignItems: 'center', justifyContent: 'center', padding: 20 }}>
        <Avatar style={{ marginTop: 20 }} />

        <Text style={{ color: 'white', fontSize: 34, marginTop: 16 }}>
          {user?.attributes?.name}
        </Text>
        <Text style={{ color: 'white', fontSize: 16, marginTop: 8, fontWeight: 'bold' }}>
          Community #TBD
        </Text>
      </View>
    </BGView>
  );
}
