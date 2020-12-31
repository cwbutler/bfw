import React, { useContext } from 'react';
import { AWSUserContext } from './useAWSUser';
import Providers from './Providers';
import AuthStack from './AuthNavigationStack';
import AppStack from './AppNavigationStack';

export default function Routes() {
  return (
    <Providers>
      <AppNavigation />
    </Providers>
  );
}

function AppNavigation() {
  const user = useContext(AWSUserContext);
  return (user?.attributes) ? <AppStack /> : <AuthStack />;
}
