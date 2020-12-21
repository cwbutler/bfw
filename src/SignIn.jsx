import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { Auth } from 'aws-amplify';
import BGScreen from './BackgroundScreen';
import { primary_color } from './styles';

export default function SignIn() {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = async ({ email, password }) => {
    const result = await Auth.signIn(email, password);
    console.log(result);
  };

  return (
    <BGScreen>
      <View style={{ marginTop: 100, marginBottom: 60 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
          Welcome Back
        </Text>
        <Text style={{ fontSize: 18, color: 'gray', textAlign: 'center', marginTop: 10 }}>
          Sign in to access Black Family Wealth Community
        </Text>
      </View>

      <View style={{ flexDirection: 'column', padding: 10, flex: 1 }}>
        <Input
          control={control}
          errors={errors.email}
          name="email"
          placeholder="Email*"
          rules={{ required: true }}
          errorText="This is required"
        />
  
        <Input
          control={control}
          errors={errors.password}
          name="password"
          placeholder="Password*"
          rules={{ required: true }}
          errorText="This is required"
        />
      </View>

      <View style={{ flexDirection: 'column', padding: 10, }}>
        <Pressable
          style={{
            backgroundColor: primary_color,
            borderRadius: 18,
            padding: 12,
            alignItems: 'center',
            marginBottom: 8
          }}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
            Sign In
          </Text>
        </Pressable>

        <Text style={{ fontSize: 12, color: 'gray', textAlign: 'center' }}>
          By proceeding you also agree to the Terms of Service and Privacy Policy
        </Text>
      </View>
    </BGScreen>
  );
}

function Input(props) {
  const hasError = props.errors;
  const isPassword = props.name === 'password';

  return (
     <View style={{ flexDirection: 'column', padding: 4 }}>
      <Controller
        control={props.control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={{
              backgroundColor: 'white',
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 16,
              paddingBottom: 16,
              borderRadius: 4,
              fontSize: 16,
              borderColor: (hasError) ? 'red' : undefined,
              borderWidth: (hasError) ? 2 : undefined
            }}
            placeholder={props.placeholder}
            placeholderTextColor="gray"
            onBlur={onBlur}
            onChangeText={text => onChange(text)}
            value={value}
            secureTextEntry={isPassword}
            textContentType={(isPassword) ? 'password' : 'emailAddress'}
            autoCompleteType={(isPassword) ? 'password' : 'email'}
          />
        )}
        name={props.name}
        rules={props.rules}
        defaultValue={props.defaultValue || ''}
      />
      {hasError && (
        <Text style={{ color: 'red', padding: 4 }}>
          * {props.errorText}
        </Text>
      )}
     </View>
  );
}
