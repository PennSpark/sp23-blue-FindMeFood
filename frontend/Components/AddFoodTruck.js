import { View, Text, Pressable, TextInput, Button, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Styles from './Styles.js';

import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome.js';

import React, { useState, useEffect } from 'react';
import { postFormData, getFormData } from './api.js';

export default function AddFoodTruck() {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [data, setData] = useState([]);

    const handleSubmitFoodTruck = async () => {
      const formData = { name };
      const response = await postFormData('/post-foodtruck/', formData);
      if (response && response.status === 'success') {
        alert('Form submitted successfully!');
        setName('');
        fetchDataFoodTruck();
      } else {
        alert('Form submission failed. Please try again.');
      }
    };
  
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
          <Text>{item.name}</Text>
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

        <Pressable onPress={() =>
            navigation.navigate('PostsLanding')
        }>
            <FontAwesome name="arrow-left" style={Styles.side_icon} />
        </Pressable>

        <Text style={Styles.text}>add food truck PAGE</Text>

        <View style={Styles.form}>
          <Text style={Styles.label}>Food Truck Name:</Text>
          <TextInput
            style={Styles.input}
            value={name}
            onChangeText={setName}
          />
          <Button
            title="Submit"
            onPress={handleSubmitFoodTruck}
          />
        </View>
      </View>
    );
}