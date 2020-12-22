import React from 'react';
import { updateUserAttributes } from './api/auth';
import BGScreen from './BackgroundScreen';
import PayPalView from './PayPalView';
import useAWSUser from './useAWSUser';

// sb-7k5t33965607@personal.example.com
// .$cxK%9t

export default function MembershipFee(props) {
  const user = useAWSUser();
  return (
    <BGScreen>
      <PayPalView onSuccess={async () => {
        await updateUserAttributes({ user, attributes: { 'custom:subscribed': '1' } })
        props.setSubscribed(true);
      }} />
    </BGScreen>
  );
}
