import { View, Text, Pressable, TextInput, Button, FlatList, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Styles from './Styles.js';

import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome.js';

import React, { useState, useEffect } from 'react';
import { postFormData, getFormData } from './api.js';

import * as ImagePicker from 'expo-image-picker';

export default function AddFoodTruck() {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [menu, setMenu] = useState('');
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const [data, setData] = useState([]);

    const handleSubmitFoodTruck = async () => {
      const formData = { name, location, menu, lat, lon };
      const response = await postFormData('/post-foodtruck/', formData);
      console.log(response)
      if (response && response.status === 'success') {
        alert('Form submitted successfully!');
        setName('');
        setLocation('');
        setMenu(image);
        setLat();
        setLong();
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

    const [image, setImage] = useState('');

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
        setMenu(result.assets[0].uri)
      }
    };

    return (
      <View style={Styles.container}>
        <LinearGradient
          // Background Linear Gradient
          colors={['rgba(49, 47, 63, 1.0)', 'transparent']}
          style={Styles.background}
          locations={[0.01, 0.9]}
        />

       <View style={Styles.test_box}>
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
          <Text style={Styles.label}>Location:</Text>
          <TextInput
            style={Styles.input}
            value={location}
            onChangeText={setLocation}
          />
          <Text style={Styles.label}>Latitude:</Text>
          <TextInput
            style={Styles.input}
            value={lat}
            onChangeText={setLat}
          />
          <Text style={Styles.label}>Longitude:</Text>
          <TextInput
            style={Styles.input}
            value={lon}
            onChangeText={setLon}
          />
          <Text style={Styles.label}>Menu:</Text>
          <Button style={Styles.upload_btn} title="Pick an image from camera roll" onPress={pickImage} />
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
          <Button
            title="Submit"
            onPress={handleSubmitFoodTruck}
          />
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          
        </View>
       </View>
      </View>
    );
}