import React from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerItemList  } from '@react-navigation/drawer';
import { View } from 'react-native';

export default function DrawerContent(props) {
  return (
    <DrawerContentScrollView style={{ flexDirection: 'column'   }} {...props}>
      <DrawerItemList {...props} />
      <View style={{ flex: 1 }} />
      <DrawerItem label="Sign Out" />
    </DrawerContentScrollView>
  );
}
