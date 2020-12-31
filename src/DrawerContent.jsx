import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { Auth } from 'aws-amplify';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import Avatar from './Avatar';
import { AWSUserContext } from './useAWSUser';

export default function DrawerContent(props) {
  return (  
    <DrawerContentScrollView  
      {...props}
    >
      <DrawerHeader />
      <DrawerItemList {...props} />
      <View style={{ flex: 1 }} />
      <DrawerItem
        label="Sign Out"
        labelStyle={{ color: 'white' }}
        onPress={() => Auth.signOut()}
      />
    </DrawerContentScrollView>
  );
}

function DrawerHeader() {
  const user = useContext(AWSUserContext);
  const hasName = Boolean(user?.attributes?.name?.trim());
  return (  
    <View style={{ alignItems: 'center', padding: 12 }}>
      <Avatar />
      <View style={{ marginTop: 16, marginBottom: 8 }}>
        <Text style={{ color: 'white', fontSize: hasName ? 26 : 14 }}>
          {hasName ? user?.attributes?.name : user?.attributes?.email}
        </Text>
      </View>
    </View>
  );
}
