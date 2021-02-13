import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';  
import { Storage } from 'aws-amplify';
import BGScreen from './BackgroundScreen';
import defaultProfilePic from '../assets/defaultProfile.png';
import { primary_color } from './styles';

export default function Profile({ route }) {
  const user = route.params.user;
  const [picture, setPicture] =  useState(defaultProfilePic);

  useEffect(() => {
    if (user.picture) {
      Storage.get(user.picture)
        .then((uri) => setPicture({ uri }));
    } else {
      setPicture(defaultProfilePic);
    }
  }, [user.picture]);

  return (
    <BGScreen>
      <View style={{ alignItems: 'center', margin: 25, flex: 1 }}>
        <Image source={picture} style={{ width: 150, height: 150, borderRadius: 100, marginBottom: 20 }} />
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>
            {user.name}
          </Text>
          <Text style={{ color: 'white', fontSize: 16 }}>
            #{user.preferred_username}
          </Text>
        </View>

        <View style={{ flex: 1, marginTop: 15 }}>
          <Item label="Android Pay" value={user.googlePayId} />
          <Item label="Apple Pay" value={user.applePayId} />
          <Item label="Cash App" value={user.cashAppId} />
          <Item label="Paypal" value={user.payPalId} />
          <Item label="Paypal Money Pool" value={user.payPalMoneyPool} />
          <Item label="Zelle" value={user.zelleId} />
        </View>
      </View>
    </BGScreen>
  );
}

function Item(props) {
  return (
    <View style={{ flexDirection: 'row', width: '100%', margin: 6, borderWidth: 1, borderColor: '#fcfcfc', }}>
      <View style={{ borderRightWidth: 1, borderColor: '#fcfcfc', alignItems: 'center', justifyContent: 'center', width: 110, height: 50  }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>
          {props.label}
        </Text>
      </View>
      <View style={{ flex: 1, padding: 6, backgroundColor: 'gray', justifyContent: 'center' }}>
        <Text style={[{ fontSize: 15, color: (Boolean(props.value)) ? primary_color : 'white' }, props.value && { fontWeight: 'bold' }]}>
          {props.value || `${props.label} Id`}
        </Text>
      </View>
    </View>
  );
}
