import React, { useContext } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Auth } from 'aws-amplify';
import BGView from './BackgroundScreen';
import { AWSUserContext } from './useAWSUser';

export default function HomeScreen() {
  const user = useContext(AWSUserContext);
  console.log(user.attributes);

  return (
    <BGView statusBarStyle="dark-content">
      <View style={{ alignItems: 'center', justifyContent: 'center', padding: 20 }}>
        <Text style={{ color: 'white', fontSize: 34 }}>
          {user.attributes.name}
        </Text>
    
        <Pressable onPress={() => Auth.signOut()}>
          <Text style={{ color: 'white' }}>Log Out</Text>
        </Pressable> 
      </View>
    </BGView>
  );
}
