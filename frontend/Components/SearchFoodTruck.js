import { View, Text, Pressable, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Styles from './Styles.js';

import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome.js';

import React, { useState, useEffect } from 'react';
import { getFormData } from './api.js';

export default function SearchFoodTruck() {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [data, setData] = useState([]);
  
    const fetchDataFoodTruck = async () => {
      const response = await getFormData('/get-foodtruck/');
      if (response && Array.isArray(response)) {
        setData(response);
      }
    };
  
    useEffect(() => {
      fetchDataFoodTruck();
    }, []);

    const renderItem = ({ item }) => (
        <View style={Styles.item}>
          <Text style={Styles.text}>{item.name}</Text>
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

        <Text style={Styles.text}>SEARCH FOOD TRUCK PAGE</Text>

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