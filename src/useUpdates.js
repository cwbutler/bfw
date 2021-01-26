import { useEffect } from 'react';
import { Alert } from 'react-native';
import * as Updates from 'expo-updates';

export default function() {
  useEffect(() => {
    if (!__DEV__) {
      setTimeout(() => {
        Updates.checkForUpdateAsync()
          .then((update) => {
            if (update.isAvailable) {
              return Updates.fetchUpdateAsync();
            }
            return { isNew: false };
          })
          .then(({ isNew }) => {
            if (isNew) {
              Alert.alert(
                "New Software Update",
                "There is an update to this app. Would you like to install now?",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: async () => await Updates.reloadAsync() }
                ],
                { cancelable: false }
              );
            }
          });
      }, 60000);
    }
  }, []);
}
