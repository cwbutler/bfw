import React, { useContext } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { AWSUserContext } from './useAWSUser';
import BGView from './BackgroundScreen';
import Avatar from './Avatar';
import fireImage from '../assets/fire.png';
import waterImage from '../assets/water.png';

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

      <View style={{ backgroundColor: '#1c1c1c', flexDirection: 'row', justifyContent: 'center', margin: 20 }}>
        <View style={{ flexDirection: 'column', alignItems: 'center', flex: 1 }}>
          <ImageBackground source={waterImage} style={{ width: '100%', height: 152, alignItems: 'center', justifyContent: 'center' }} resizeMode="contain">
            <View style={{ marginRight: 18, alignItems: 'center' }}>
              <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Your Next</Text>
              <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Water:</Text>
              <Text style={{ color: 'white', fontSize: 16 }}>TBD</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center', flex: 1 }}>
          <ImageBackground source={fireImage} style={{ width: '100%', height: 152, justifyContent: 'center' }} resizeMode="contain">
            <View style={{ marginRight: 32, alignItems: 'center' }}>
              <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Your Next</Text>
              <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Fire:</Text>
              <Text style={{ color: 'white', fontSize: 16 }}>TBD</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </BGView>
  );
}
