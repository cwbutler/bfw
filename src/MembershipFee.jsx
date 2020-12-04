import React from 'react';
import BGScreen from './BackgroundScreen';
import PayPalView from './PayPalView';

export default function MembershipFee() {
  return (
    <BGScreen>
      <PayPalView 
        onSuccess={(data) => console.log(data)}
        onCancelled={(data) => console.log(data)}
      />
    </BGScreen>
  );
}
