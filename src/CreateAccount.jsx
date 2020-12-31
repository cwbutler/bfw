import React, { useState } from 'react';
import { Text, TextInput, ScrollView, View, Pressable } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { createUser, signUp } from './api/auth';
import BGScreen from './BackgroundScreen';
import Loader from './FullViewLoader';
import { primary_color } from './styles';

export default function CreateAccount({ navigation }) {
  const { control, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async input => {
    try {
      setIsLoading(true);
      const dbUser = await createUser({
        ...input,
        password: undefined
      });

      // Save ref to profile in db.
      input.profile = dbUser.id;

      await signUp(input);
      navigation.navigate('VerifyAccount', { email: input.email });
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  return (
    <BGScreen
      backgroundStyle={{ backgroundColor: 'whitesmoke' }}
      contentStyle={{ padding: 14, paddingTop: 20 }}
    >
      {isLoading && <Loader size="large" />}
      <ScrollView>
        <HeaderTitle text="Create Account" />
        <View style={{ marginBottom: 20 }}>
          <Input
            control={control}
            errors={errors.email}
            name="email"
            placeholder="Email address"
            rules={{ required: true }}
            textContentType="emailAddress"
            autoCompleteType="email"
            errorText="Email is required"
          />
          <Input
            control={control}
            errors={errors.password}
            name="password"
            placeholder="Choose password"
            rules={{ required: true, min: 6 }}
            textContentType="password"
            secureTextEntry
            errorText="Password must be at least 8 characters"
          />    
        </View>

        <HeaderTitle text="Personal Information" />

        <View style={{ marginBottom: 18 }}>
          <Input
            control={control}
            errors={errors.firstName}
            name="firstName"
            placeholder="First name"
            textContentType="name"
            autoCompleteType="name"
          />
          <Input
            control={control}
            errors={errors.lastName}
            name="lastName"
            placeholder="Last name"
            textContentType="familyName"
            autoCompleteType="name"
          />
          {/*<Input
            control={control}
            errors={errors.phone}
            name="phone"
            placeholder="Phone number"
            textContentType="telephoneNumber"
            autoCompleteType="tel"
          />*/}
          <Input
            control={control}
            errors={errors.paypal}
            name="payPalId"
            placeholder="PayPal"
          />
          <Input
            control={control}
            errors={errors.cashApp}
            name="cashAppId"
            placeholder="Cash App"
          />
          <Input
            control={control}
            errors={errors.applePay}
            name="applePayId"
            placeholder="Apple Pay"
          />
          <Input
            control={control}
            errors={errors.androidPay}
            name="googlePayId"
            placeholder="Android Pay"
          />
        </View>

        <Pressable
          style={{ 
            alignItems: 'center', 
            borderRadius: 12, 
            backgroundColor: primary_color, 
            padding: 15, 
            width: '100%' 
          }}
          onPress={handleSubmit(onSubmit)}
          disabled={isLoading}
        >
          <Text style={{ color: 'white', fontSize: 16 }}>
            Create Account
          </Text>
        </Pressable>
      </ScrollView>
    </BGScreen>
  );
}

function HeaderTitle({ text, style }) {
  return (
    <Text
      style={[{
        color: primary_color,
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
      }, style]}
    >
      {text}
    </Text>
  )
}

function Input(props) {
  const hasError = props.errors;
  return (
    <View style={{ flexDirection: 'column' }}>
      <Controller
        control={props.control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={{
              padding: 10,
              paddingBottom: 16,
              marginBottom: 6,
              fontSize: 16,
              borderBottomColor: (hasError) ? 'red' : primary_color,
              borderBottomWidth: 2,
              borderColor: (hasError) ? 'red' : undefined,
              borderWidth: (hasError) ? 2 : undefined
            }}
            placeholder={props.placeholder}
            placeholderTextColor="gray"
            onBlur={onBlur}
            onChangeText={text => onChange(text)}
            value={value}
            secureTextEntry={props.secureTextEntry}
            textContentType={props.textContentType}
            autoCompleteType={props.autoCompleteType}
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
