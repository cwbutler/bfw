import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function Providers({ children }) {
  return (
    <NavigationContainer>
      {children}
    </NavigationContainer>
  );
}
