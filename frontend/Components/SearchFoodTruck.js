import { View, Text, Pressable, FlatList, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Styles from './Styles.js';

import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome.js';

import React, { useState, useEffect } from 'react';
import { getFormData } from './api.js';

export default function SearchFoodTruck() {
    const navigation = useNavigation();

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
        <View style={Styles.ft_item}>
          {item.menu && <Image source={{ uri: item.menu }} style={Styles.ft_item_img} />}
          <Text style={Styles.ft_item_text_name}>{item.name}</Text>
          <Text style={Styles.ft_item_text_location}>{item.location}</Text>
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

        <View height='17%'>
        </View>

        <View style={Styles.page_header}>
          <Pressable onPress={() =>
            navigation.navigate('SearchLanding')
          }>
            <FontAwesome name="arrow-left" style={Styles.side_icon} />
          </Pressable>

          <Text style={Styles.text}>SEARCH FOOD TRUCK PAGE</Text>
        </View> 

        <View style={Styles.list}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{paddingTop: '18%'}}
            ItemSeparatorComponent={() => <View style={{height: '7%'}} />}
            showsVerticalScrollIndicator={false}
            // onPress={() => this._onPress(item)}
          />
        </View>
      </View>
    );
}