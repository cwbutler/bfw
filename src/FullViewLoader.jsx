import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export default function FullViewLoader(props) {
  return (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
      }}
    >
      <ActivityIndicator {...props} />
    </View>
  );
}
