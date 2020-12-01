import React from 'react';
import { Text, TextInput, ScrollView, View, Pressable } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import BGScreen from './BackgroundScreen';
import { primary_color } from './styles';

export default function CreateAccount({ navigation }) {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log('createAccount', data);
    navigation.navigate('MembershipFee');
  };

  return (
    <BGScreen
      backgroundStyle={{ backgroundColor: 'whitesmoke' }}
      contentStyle={{ padding: 14, paddingTop: 20 }}
    >
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
          />
          <Input
            control={control}
            errors={errors.password}
            name="password"
            placeholder="Choose password"
            rules={{ required: true }}
            textContentType="password"
            secureTextEntry
          />
          <Input
            control={control}
            errors={errors.confirmPassword}
            name="confirmPassword"
            placeholder="Confirm password"
            rules={{ required: true }}
            textContentType="password"
            secureTextEntry
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
          <Input
            control={control}
            errors={errors.phone}
            name="phone"
            placeholder="Phone number"
            textContentType="telephoneNumber"
            autoCompleteType="tel"
          />
          <Input
            control={control}
            errors={errors.paypal}
            name="paypal"
            placeholder="PayPal"
          />
          <Input
            control={control}
            errors={errors.cashApp}
            name="cashApp"
            placeholder="Cash App"
          />
          <Input
            control={control}
            errors={errors.applePay}
            name="applePay"
            placeholder="Apple Pay"
          />
          <Input
            control={control}
            errors={errors.androidPay}
            name="androidPay"
            placeholder="Android Pay"
          />
        </View>

        <Pressable
          style={{ alignItems: 'center', borderRadius: 12, backgroundColor: primary_color, padding: 15, width: '100%' }}
          onPress={handleSubmit(onSubmit)}
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
              borderBottomColor: (props.error) ? 'red' : primary_color,
              borderBottomWidth: 2
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
      {props.error && (
        <Text style={{ color: 'red', padding: 4 }}>
          * {props.error}
        </Text>
      )}
     </View>
  );
}
