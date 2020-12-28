import React, { useContext, useEffect } from 'react';
import { updateUserAttributes } from './api/auth';
import { useNavigation } from '@react-navigation/native';
import BGScreen from './BackgroundScreen';
import PayPalView from './PayPalView';
import { AWSUserContext } from './useAWSUser';

// sb-7k5t33965607@personal.example.com
// .$cxK%9t

export default function MembershipFee(props) {
  const user = useContext(AWSUserContext);
  const navigation = useNavigation();

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      props.setSubscribed(true);
    }
  }, []);

  return (
    <BGScreen contentStyle={{ backgroundColor: 'black' }}>
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
