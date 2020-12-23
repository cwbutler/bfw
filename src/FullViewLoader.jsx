import React from 'react';
import { ActivityIndicator, Dimensions, View } from 'react-native';

export default function FullViewLoader(props) {
  return (
    <View
      style={{
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0, 0.2)'
      }}
    >
      <ActivityIndicator {...props} />
    </View>
  );
}
