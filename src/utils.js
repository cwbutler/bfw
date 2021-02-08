import { Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as ImagePicker from 'expo-image-picker';
import * as MailComposer from 'expo-mail-composer';

export const registerForPushNotificationsAsync = async () => {
  let token;

  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    //alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
};

export const pickImageFromGallery = async () => {
  if (Platform.OS !== 'web') {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      return alert('Sorry, we need camera roll permissions to make this work!');
    }
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 1,
    base64: true,
  });

  return result;
};

export async function mailTo({ recipients, subject, body, isHtml }) {
  if (await MailComposer.isAvailableAsync()) {
    const { status } = await MailComposer.composeAsync({
      recipients,
      subject,
      body,
      isHtml
    });

    return status;
  } else {
    Linking.openURL(`mailto://${recipients[0]}?subject=${data.subject}&body=${data.message}`);
    return "sent"; 
  }
}