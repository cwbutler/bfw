import React, { useEffect, useState } from 'react';
import { Image, FlatList, Text, View, Pressable, StyleSheet, ActivityIndicator  } from 'react-native';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import { listAppUsers } from '../graphql/queries';
import BGScreen from './BackgroundScreen';
import defaultProfilePic from '../assets/defaultProfile.png';
import { TextInput } from 'react-native-gesture-handler';
import { primary_color } from './styles';

const filterTypes = {
  memberNumber: { value: 'preferred_username', inputLabel: 'Mem #', label: 'Member Number', key: 0 },
  email: { value: 'email', label: 'Email', key: 1 }
};

export default function ListUsers() {
  const [users, setUsers] = useState([]);
  const [nextToken, setNextToken] = useState();
  const [filterInput, setFilterInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState(filterTypes.memberNumber.value);
  const filter = `${filterType} ^= \"${filterInput}\"`;
  
  const renderItem = ({ item }, index) => <UserItem {...item} />;

  useEffect(() => {
    API.graphql(graphqlOperation(listAppUsers, { nextToken, filter }))
      .then((r) => {
        setNextToken(r?.data?.listAppUsers?.nextToken);
        setUsers(r?.data?.listAppUsers?.items
          .filter((a) => Number(a.preferred_username))
          .sort((a, b) => Number(a.preferred_username) > Number(b.preferred_username))
        );
        setLoading(false);
      });
  }, []);

  const search = async () => {
    setLoading(true);
    const { data: { listAppUsers: result } } = await API.graphql(graphqlOperation(listAppUsers, { filter, limit: 60 }));
    setNextToken(result?.nextToken);
    setUsers(result.items
      .filter((a) => Number(a.preferred_username))
      .sort((a, b) => Number(a.preferred_username) > Number(b.preferred_username)));
    setLoading(false);
  }

  const loadMore = async () => {
    if (nextToken) {
      const { data: { listAppUsers: result } } = await API.graphql(graphqlOperation(listAppUsers, { filter, nextToken }));
      setNextToken(result?.nextToken);
      setUsers(
        [...users, ...result.items.filter((a) => Number(a.preferred_username))]
        .sort((a, b) => Number(a.preferred_username) > Number(b.preferred_username))
      );
    }
  }

  return (
    <BGScreen backgroundStyle={{ backgroundColor: '#fcfcfc' }}>
      <View style={{ flexDirection: 'row', margin: 8, justifyContent: 'center' }}>
        <RNPickerSelect
          style={pickerSelectStyles}
          value={filterType}
          onValueChange={(itemValue) => setFilterType(itemValue || filterTypes.memberNumber.value)}
          items={Object.values(filterTypes)}
        />
        <TextInput
          placeholder="Search BFW Members"
          value={filterInput}
          onChangeText={(text) => setFilterInput(text)}
          style={{ borderWidth: 1, borderColor: 'gray', padding: 12, flex: 1 }}
        />
        <Pressable
          style={{ backgroundColor: primary_color, padding: 8, justifyContent: 'center' }}
          onPress={search}
        >
          <Ionicons name="search-sharp" size={24} color="white" />
        </Pressable>
      </View>

      {(loading) ? (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" color={primary_color} />
        </View>
      ) : (
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          onEndReached={loadMore}
        />
      )}
    </BGScreen> 
  );
}

export function UserItem(props) {
  const [picture, setPicture] =  useState(defaultProfilePic);
  const navigation = useNavigation();
  
  useEffect(() => {
    if (props.picture) {
      Storage.get(props.picture)
        .then((uri) => setPicture({ uri }));
    } else {
      setPicture(defaultProfilePic);
    }
  }, [props.picture]);

  return (
    <Pressable 
      style={{ flexDirection: 'row', alignItems: 'center', padding: 18  , borderBottomColor: 'gray', borderBottomWidth: 1 }}
      onPress={() => navigation.navigate('Profile', { user: props })}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          style={{ width: 60, height: 60, marginRight: 15 }}
          source={picture}
        />
        <View>
          <Text style={{ color: 'black', fontSize: 16 }}>{props.name}</Text>
          <Text style={{ color: 'black', fontSize: 12 }}>
            #{props.preferred_username}
          </Text>
        </View>
      </View>
      <View style={{ flex: 1 }} /> 
      <Ionicons name="arrow-forward" size={24} color="black" />
    </Pressable>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: 75,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputAndroid: {
    width: 75,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
  },
});
