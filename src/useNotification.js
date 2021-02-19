import { useContext, useEffect, useRef } from 'react';
import { Alert } from 'react-native';
import * as Notifications from 'expo-notifications';
import { AWSUserContext } from './useAWSUser';
import { registerForPushNotificationsAsync } from './utils';

export default function useNotificationToken() {
  const user = useContext(AWSUserContext);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    if (user?.Session) {
      registerForPushNotificationsAsync();
      // This listener is fired whenever a notification is received while the app is foregrounded
      notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        Alert.alert(notification.request.content.title, notification.request.content.body);
      });
  
      // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
      responseListener.current = Notifications.addNotificationResponseReceivedListener(({ notification }) => {
        Alert.alert(notification.request.content.title, notification.request.content.body);
      });
  
      return () => {
        Notifications.removeNotificationSubscription(responseListener);
      };
    }
  }, [user]);
}
