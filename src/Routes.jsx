import React from 'react';
import useAWSUser from './useAWSUser';
import Providers from './Providers';
import AuthStack from './AuthNavigationStack';
import AppStack from './AppNavigationStack';

export default function Routes() {
  const user = useAWSUser();
  return (
    <Providers>
      {(user) ? <AppStack /> : <AuthStack />}
    </Providers>
  );
}
