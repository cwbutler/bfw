import React, { useContext, useState } from 'react';
import { Text, ScrollView, View, Pressable } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { signUp, updateUserAttributes } from './api/auth';
import BGScreen from './BackgroundScreen';
import Loader from './FullViewLoader';
import ErrorBox from './ErrorBox';
import getInputClass from './inputs';
import { AWSUserContext } from './useAWSUser';
import { primary_color } from './styles';

export default function CreateAccount({ navigation, ...props }) {
  const { control, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState();
  const user = useContext(AWSUserContext);

  const onSubmit = async input => {
    try {
      setServerError();
      setIsLoading(true);
      if (props.editUser) {
        await updateUserAttributes({
          user, 
          attributes: {
            given_name: input.firstName.trim(),
            family_name: input.lastName.trim(),
            name: `${input.firstName} ${input.lastName}`.trim(),
            'custom:googlePayId': input.googlePayId,
            'custom:applePayId': input.applePayId,
            'custom:cashAppId': input.cashAppId,
            'custom:payPalId': input.payPalId,
            'custom:zelleId': input.zelleId,
            'custom:payPalMoneyPool': input.payPalMoneyPool
          }
        });
        user.refresh();
      } else {
        await signUp(input);
        navigation.navigate('VerifyAccount', { email: input.email });
      }
    } catch (e) {
      console.log(e);
      setServerError(e.message);
    } finally {
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
        {!(props.editUser) && (<>
          <HeaderTitle text="Create Account" />
          <ErrorBox error={serverError} />
          <View style={{ marginBottom: 20 }}>
            <Input
              control={control}
              errors={errors.email}
              name="email"
              placeholder="Email address"
              rules={{ required: true }}
              errorText="Email is required"
            />
            <Input
              control={control}
              errors={errors.password}
              name="password"
              placeholder="Choose password"
              rules={{ required: true, minLength: 6 }}
              errorText="Password must be at least 6 characters"
            />    
          </View>
        </>)}

        <HeaderTitle text="Personal Information" />

        <View style={{ marginBottom: 18 }}>
          <Input
            control={control}
            errors={errors.firstName}
            name="firstName"
            placeholder="First name"
            textContentType="name"
            autoCompleteType="name"
            defaultValue={user?.attributes?.given_name}
          />
          <Input
            control={control}
            errors={errors.lastName}
            name="lastName"
            placeholder="Last name"
            textContentType="familyName"
            autoCompleteType="name"
            defaultValue={user?.attributes?.family_name}
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
            defaultValue={user?.attributes ? user?.attributes['custom:payPalId'] : ''}
          />
          <Input
            control={control}
            errors={errors.cashApp}
            name="cashAppId"
            placeholder="Cash App"
            defaultValue={user?.attributes ? user?.attributes['custom:cashAppId'] : ''}
          />
          <Input
            control={control}
            errors={errors.applePay}
            name="applePayId"
            placeholder="Apple Pay"
            defaultValue={user?.attributes ? user?.attributes['custom:applePayId'] : ''}
          />
          <Input
            control={control}
            errors={errors.androidPay}
            name="googlePayId"
            placeholder="Android Pay"
            defaultValue={user?.attributes ? user?.attributes['custom:googlePayId'] : ''}
          />
          <Input
            control={control}
            errors={errors.paypalMoneyPool}
            name="payPalMoneyPool"
            placeholder="PayPal Money Pool"
            defaultValue={user?.attributes ? user?.attributes['custom:payPalMoneyPool'] : ''}
          />
          <Input
            control={control}
            errors={errors.zelleId}
            name="zelleId"
            placeholder="Zelle"
            defaultValue={user?.attributes ? user?.attributes['custom:zelleId'] : ''}
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
        >
          <Text style={{ color: 'white', fontSize: 16 }}>
            {props.editUser ? 'Update Info' : 'Create Account'}
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

export function Input(props) {
  const hasError = props.errors;
  const InputComponent = getInputClass(props.name);

  return (
    <View style={[{ flexDirection: 'column' }, props.containerStyle]}>
      <Controller
        control={props.control}
        render={({ onChange, onBlur, value }) => (
          <InputComponent
            style={[{
              backgroundColor: '#fefefe',
              padding: 10,
              paddingBottom: 16,
              marginBottom: 6,
              fontSize: 16,
              borderBottomColor: (hasError) ? 'red' : primary_color,
              borderBottomWidth: 2,
              borderColor: (hasError) ? 'red' : undefined,
              borderWidth: (hasError) ? 2 : undefined
            }, props.inputStyle]}
            placeholder={props.placeholder}
            placeholderTextColor="gray"
            onBlur={onBlur}
            onChangeText={text => onChange(text)}
            value={value}
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
