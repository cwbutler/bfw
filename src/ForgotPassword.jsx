import React, { useState } from 'react';
import { Pressable, Text, TextInput, KeyboardAvoidingView, Platform, View } from 'react-native';
import { Auth } from 'aws-amplify';
import { useForm, Controller } from "react-hook-form";
import BGScreen from './BackgroundScreen';
import EmailInput from './inputs/Email';
import { primary_color } from './styles';

export default function ForgotPassword({ navigation }) {
  const { control, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState();
  const [showVerify, setShowVerify] = useState();
  console.log(errors);

  const onSubmit = async input => {
    setIsLoading(true);
    setServerError();
    const email = input.email.toLowerCase().trim();
    
    try {
      if (showVerify) {
        await Auth.forgotPasswordSubmit(email, input.code, input.password);
        navigation.navigate('Login');
      } else {
        await Auth.forgotPassword(email);
        setShowVerify(true);
      }
    } catch (error) {
      console.log(error);
      setServerError(error.message);
    }

    setIsLoading(false);
  };

  return (
    <BGScreen>
      <KeyboardAvoidingView 
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={{ flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        {serverError && (
          <View style={{ backgroundColor: 'red', padding: 8, marginBottom: 10 }}>
            <Text style={{ color: 'white' }}>{serverError}</Text>
          </View>
        )}
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, marginBottom: 8 }}>
          {(showVerify) ? 'Reset your BFW password' : 'Find your BFW Account'}
        </Text>

        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <EmailInput
              style={{ borderWidth: 1, borderColor: primary_color, borderRadius: 10, padding: 10, margin: 6, textAlign: 'center', fontSize: 18, alignSelf: 'stretch', color: 'white', fontWeight: 'bold' }}
              placeholder="Enter email"
              placeholderTextColor="gray"
              onChangeText={text => onChange(text)}
              onBlur={onBlur}
              value={value}
            />
          )}
          name="email"
          rules={[{ required: true }]}
          defaultValue=""
        />

        {showVerify && (
          <>
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                  style={{ borderWidth: 1, borderColor: primary_color, borderRadius: 10, padding: 10, margin: 6, textAlign: 'center', fontSize: 18, alignSelf: 'stretch', color: 'white', fontWeight: 'bold' }}
                  placeholder="Enter Reset Code"
                  placeholderTextColor="gray"
                  autoCapitalize="none"
                  autoCompleteType="off"
                  keyboardType="number-pad"
                  textContentType="oneTimeCode"
                  onChangeText={text => onChange(text)}
                  onBlur={onBlur}
                  value={value}
                />
              )}
              name="code"
              rules={[{ required: true }]}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                  style={{ borderWidth: 1, borderColor: primary_color, borderRadius: 10, padding: 10, margin: 6, textAlign: 'center', fontSize: 18, alignSelf: 'stretch', color: 'white', fontWeight: 'bold' }}
                  placeholder="New Password"
                  placeholderTextColor="gray"
                  autoCapitalize="none"
                  autoCompleteType="off"
                  textContentType="password"
                  onChangeText={text => onChange(text)}
                  onBlur={onBlur}
                  value={value}
                  secureTextEntry
                />
              )}
              name="password"
              rules={{ required: true, minLength: 6 }}
              defaultValue=""
            />
          </>
        )}
        
        <Pressable
          style={{ marginTop: 12, padding: 12, backgroundColor: primary_color, borderRadius: 6 }}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={{ color: 'black', fontSize: 16 }}>
            {(showVerify) ? 'Reset Password' : 'Search'}
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </BGScreen>
  );
}
