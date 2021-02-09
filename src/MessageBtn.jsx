import React, { useContext } from 'react';
import { Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { dark_gray } from './styles';
import { mailTo } from './utils';
import { AWSUserContext } from './useAWSUser';

export default function MessageModal() {
  const navigation = useNavigation();
  const user = useContext(AWSUserContext);

  return (
    <Pressable
      style={{ 
        flexDirection: 'row',
        backgroundColor: dark_gray, 
        borderRadius: 20, 
        width: 150    ,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12
      }}
      onPress={() => mailTo({
        recipients: ['blackfamilywealthgroup@gmail.com'],
        subject: `[${user.attributes['preferred_username']}] - ${user.attributes.email}`
      })}
    >
      <Text style={{ color: 'white', fontSize: 16, marginRight: 4  }}>
        Message
      </Text>
      <Ionicons name="chatbox-sharp" size={18} color="red" /> 
    </Pressable>
  );
}
