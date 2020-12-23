import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AWSUserProvider from './useAWSUser';

export default function Providers({ children }) {
  return (
    <AWSUserProvider>
      <NavigationContainer>
        {children}
      </NavigationContainer>
    </AWSUserProvider>
  );
}
