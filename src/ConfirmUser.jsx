import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import BGView from './BackgroundScreen';
import { confirmUser } from './api/auth';
import Loader from './FullViewLoader';
import { primary_color } from './styles';
import { Auth } from 'aws-amplify';

export default function ConfirmUser(props) {
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resent, setResent] = useState(false);
  const email = props.route.params.email;

  async function onSubmit() {
    setIsLoading(true);
    await confirmUser({ email, code });
    props.navigation.navigate('Login');
  } 

  return (
    <BGView>
      {isLoading && <Loader size="large" />}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', marginBottom: 15 }}>
          Please enter confirmation code sent to your email.
        </Text>
        <TextInput
          style={{
            padding: 10,
            marginBottom: 16,
            fontSize: 16,
            borderWidth: 2,
            borderColor: 'white',
            width: '100%',
            textAlign: 'center',
            color: 'white'
          }}
          placeholder="Confirmation Code"
          placeholderTextColor="gray"
          onChangeText={text => setCode(text)}
          textContentType="oneTimeCode"
        />
        <Pressable
          style={{ backgroundColor: primary_color, padding: 12, borderRadius: 4 }}
          onPress={onSubmit}
          disabled={!Boolean(code)}
        >
          <Text style={{ fontSize: 18 }}>Submit</Text>
        </Pressable>

        <Pressable
          style={{ marginTop: 35 }}
          onPress={async () => {
            await Auth.resendSignUp(email.toLowerCase().trim());
            setResent(true);
          }}
        >
          <Text style={{ fontSize: 18, color: 'white' }}>Resend Code</Text>
        </Pressable>

        {resent && (
          <View style={{ marginTop: 20 }}>
            <Text style={{ color: primary_color }}>
              Resent! Please check email for code.
            </Text>
          </View>
        )}
      </View>
    </BGView>
  );
}
