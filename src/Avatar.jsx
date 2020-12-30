import React, { useState } from 'react';
import { Image, View } from 'react-native';
import defaultAvatar from '../assets/defaultProfile.png';

export default function Avatar(props) {
  const [image, setImage] = useState(defaultAvatar);

  return (
    <View style={[{
      width: 120,
      height: 120,
      borderRadius: 100,
      borderWidth: 2.5,
      borderColor: 'white'
    }, props.style]}>
      <Image source={image} style={{ width: '100%', height: '100%', borderRadius: 100 }} />
    </View>
  );
}
