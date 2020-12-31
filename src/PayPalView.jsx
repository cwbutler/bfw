import React, { useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
import { API } from 'aws-amplify';
import BGView from './BackgroundScreen';
import Loader from './FullViewLoader';

export default function PayPalSubscribeView(props) {
  const [url, setUrl] = useState('');

  useEffect(() => {
    API.endpoint('paymentGateway').then((end) => setUrl(end));
  }, []);

  return (
    <BGView contentStyle={{ alignSelf: 'stretch', flex: 1, backgroundColor: 'black' }}>
      {(Boolean(url)) ? (
        <WebView
          source={{ uri: `${url}/subscribe` }}
          style={{ flex: 1, backgroundColor: 'black' }}
          onNavigationStateChange={(data) => {
            if (data.title === 'cancelled') {
              props.onCancel && props.onCancel(data);
            } 
            if (data.title === 'success') {
              props.onSuccess && props.onSuccess(data);
            }
          }}
        />
      ) : <Loader size="large" color="#fff" />}
    </BGView>
  );
}
