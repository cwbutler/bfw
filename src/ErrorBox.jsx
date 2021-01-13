import React from 'react';
import { Text, View } from 'react-native';

export default function ErrorBox({ error, containerStyle, textStyle }) {
  return (error) ? (
    <View style={[{ padding: 8, backgroundColor: 'red', borderRadius: 8, marginBottom: 8 }, containerStyle]}>
      <Text style={[{ color: 'white', textAlign: 'center' }, textStyle]}>
        {error}
      </Text>
    </View>
  ) : null;
}
