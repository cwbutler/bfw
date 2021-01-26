import React, { useContext, useEffect, useRef } from 'react';
import * as Notifications from 'expo-notifications';
import { registerForPushNotificationsAsync } from './utils';
import { AWSUserContext } from './useAWSUser';
import Providers from './Providers';
import AuthStack from './AuthNavigationStack';
import AppStack from './AppNavigationStack';
import { updateUserAttributes } from './api/auth';
import useUpdates from './useUpdates';
import useNotifications from './useNotification';

export default function Routes() {
  return (
    <Providers>
      <AppNavigation />
    </Providers>
  );
}

function AppNavigation() {
  const user = useContext(AWSUserContext);

  useUpdates();
  useNotifications();

  return (user?.attributes) ? <AppStack /> : <AuthStack />;
}
