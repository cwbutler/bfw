import React from 'react';
import { updateUserAttributes } from './api/auth';
import { useNavigation } from '@react-navigation/native';
import BGScreen from './BackgroundScreen';
import PayPalView from './PayPalView';
import useAWSUser from './useAWSUser';

// sb-7k5t33965607@personal.example.com
// .$cxK%9t

export default function MembershipFee(props) {
  const user = useAWSUser();
  const navigation = useNavigation();
  return (
    <BGScreen>
      <PayPalView
        onSuccess={async () => {
          await updateUserAttributes({ user, attributes: { 'custom:subscribed': '1' } })
          props.setSubscribed(true);
        }}
        onCancel={() => navigation.replace('Landing')}
      />
    </BGScreen>
  );
}
