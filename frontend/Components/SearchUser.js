import { View, Text, Pressable, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Styles from './Styles.js';

import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome.js';

import React, { useState, useEffect } from 'react';
import { getFormData } from './api.js';

export default function SearchUser() {
    const navigation = useNavigation();

    const [data, setData] = useState([]);
  
    const fetchDataUser = async () => {
      const response = await getFormData('/get-user/');
      if (response && Array.isArray(response)) {
        setData(response);
      }
    };
  
    useEffect(() => {
      fetchDataUser();
    }, []);
  
    const renderItem = ({ item }) => (
      <View style={Styles.item}>
        <Text style={Styles.text}>{item.name}</Text>
        <Text style={Styles.text}>{item.email}</Text>
        <Text style={Styles.text}>{item.message}</Text>
        <Text style={Styles.text}>{item.created_at}</Text>
      </View>
    );

    return (
      <View style={Styles.container}>
        <LinearGradient
          // Background Linear Gradient
          colors={['rgba(49, 47, 63, 1.0)', 'transparent']}
          style={Styles.background}
          locations={[0.01, 0.9]}
        />

        <View height='100%'>
        </View>

        <Pressable onPress={() =>
            navigation.navigate('SearchLanding')
        }>
            <FontAwesome name="arrow-left" style={Styles.side_icon} />
        </Pressable>

        <Text style={Styles.text}>SEARCH user PAGE</Text>

        <View style={Styles.list}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    );
}