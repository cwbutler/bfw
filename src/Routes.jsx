import React from 'react';
import Providers from './Providers';
import AuthStack from './AuthNavigationStack';

export default function Routes() {
  return (
    <Providers>
      <AuthStack />
    </Providers>
  );
}
