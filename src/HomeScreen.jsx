import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { AWSUserContext } from './useAWSUser';
import BGView from './BackgroundScreen';
import Avatar from './Avatar';

export default function HomeScreen() {
  const user = useContext(AWSUserContext);
  const hasName = Boolean(user?.attributes?.name?.trim());

  return (
    <BGView statusBarStyle="dark-content">
      <View style={{ alignItems: 'center', justifyContent: 'center', padding: 20 }}>
        <Avatar style={{ marginTop: 20 }} />

        <Text style={{ color: 'white', fontSize: (hasName) ? 34 : 18, marginTop: 16, fontWeight: 'bold' }}>
          {(hasName) ? user.attributes.name : user?.attributes?.email}
        </Text>
        <Text style={{ color: 'white', fontSize: 16, marginTop: 8 }}>
          #{user?.attributes['custom:memberNumber'] || 'TBD'}
        </Text>
      </View>

      <View style={{ backgroundColor: '#1c1c1c', flexDirection: 'row', justifyContent: 'center', padding: 12, margin: 20 }}>
        <View style={{ flexDirection: 'column', alignItems: 'center', padding: 8 }}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Your Next</Text>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Water:</Text>
          <Text style={{ color: 'white', fontSize: 16 }}>TBD</Text>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center', padding: 8 }}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Your Next</Text>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Fire:</Text>
          <Text style={{ color: 'white', fontSize: 16 }}>TBD</Text>
        </View>
      </View>
    </BGView>
  );
}
