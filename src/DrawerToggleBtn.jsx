import React from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function DrawerToggleBtn() {
  const navigation = useNavigation();
  return (
    <Pressable style={{ marginLeft: 15 }} onPress={() => navigation.toggleDrawer()}>
      <Ionicons name="md-menu" size={28} color="white" />
    </Pressable>
  );
}
