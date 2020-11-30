import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';

export default function BackgroundScreen(props) {
  const { backgroundStyle, contentStyle, statusBarStyle='light-content', children } = props;
  return (
    <SafeAreaView style={[{ backgroundColor: 'black', flex: 1 }, backgroundStyle]}>
      <StatusBar barStyle={statusBarStyle} />
      <View style={[{ flex: 1 }, contentStyle]}>
        {children}
      </View>
    </SafeAreaView>
  );
}
