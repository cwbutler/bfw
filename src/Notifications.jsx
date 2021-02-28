import React, { useContext, useEffect, useState } from 'react';
import { Alert, ActivityIndicator, FlatList, Pressable, Text, View } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import BGScreen from './BackgroundScreen';
import { primary_color } from './styles';
import { listBfwNotifications } from '../graphql/queries';
import { AWSUserContext } from './useAWSUser';
import { timeAgo } from './utils';

export default function Notifications() {
  const user = useContext(AWSUserContext);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const renderItem = ({ item }) => <Notification {...item} />;

  useEffect(() => {
    API.graphql(graphqlOperation(listBfwNotifications, { 
      owner: user.attributes.sub,
      limit: 25
    }))
      .then((r) => {
        setNotifications(r?.data?.listBFWNotifications?.items.sort((a, b) => a.createdAt < b.createdAt));
        setLoading(false);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <BGScreen backgroundStyle={{ backgroundColor: '#fcfcfc' }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        {(loading) ? <ActivityIndicator size="large" color={primary_color} /> : 
        (notifications.length > 0) ? (
          <FlatList
            data={notifications}
            renderItem={renderItem}
            keyExtractor={item => `${item.owner}${item.createdAt}`}
          />
        ) : (
          <View>
            <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>
              No notifications at this moment.
            </Text>
          </View>
        )}
      </View>
    </BGScreen>
  );
}

function Notification(props) {
  function onPress() {
    Alert.alert(props.subject, props.body);
  }

  return (
    <Pressable 
      style={{ borderBottomWidth: 1, color: 'gray', padding: 12 }}
      onPress={onPress}
    >
      <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18, marginBottom: 8 }}>
        {props.subject}
      </Text>
      <View style={{ alignItems: 'flex-end' }}>
        <Text style={{ fontSize: 11 }}>
          {timeAgo(props.createdAt)}
        </Text>
      </View>
    </Pressable>
  );
}
