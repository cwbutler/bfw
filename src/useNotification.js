import { useContext, useEffect, useRef } from 'react';
import * as Notifications from 'expo-notifications';
import { AWSUserContext } from './useAWSUser';
import { registerForPushNotificationsAsync } from './utils';
import { updateUserAttributes } from './api/auth';

export default function useNotificationToken() {
  const user = useContext(AWSUserContext);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    if (user?.Session) {
      registerForPushNotificationsAsync()
        .then(async token =>  {
          if (token) {
            await updateUserAttributes({ user, attributes: { 'custom:notificationToken': token } });
          }
        });
  
      // This listener is fired whenever a notification is received while the app is foregrounded
      notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        console.log(notification.request.content);
      });
  
      // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        console.log(response);
      });
  
      return () => {
        Notifications.removeNotificationSubscription(notificationListener);
        Notifications.removeNotificationSubscription(responseListener);
      };
    }
  }, [user]);
}
