import { View, Text, Pressable, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Styles from './Styles.js';

import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome.js';

import React, { useState, useEffect } from 'react';
import { postFormData, getFormData } from './api.js';


export default function ReviewWriteup() {
    const navigation = useNavigation();

    const [food_truck, setFoodTruck] = useState('');
    const [author, setAuthor] = useState('');
    const [rating, setRating] = useState('');
    const [desc, setDesc] = useState('');
    const [data, setData] = useState([]);

    const handleSubmitReview = async () => {
      const formData = { food_truck, author, rating, desc };
      const response = await postFormData('/post-review/', formData);
      if (response && response.status === 'success') {
        alert('Form submitted successfully!');
        setFoodTruck('');
        setAuthor('');
        setRating('');
        setDesc('');
        fetchDataReview();
      } else {
        alert('Form submission failed. Please try again.');
      }
    };
  
    const fetchDataReview = async () => {
      const response = await getFormData('/get-review/');
      if (response && Array.isArray(response)) {
        setData(response);
      }
    };
  
    useEffect(() => {
      fetchDataReview();
    }, []);

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

          <Text style={Styles.text}>review writeup PAGE</Text>


          <View style={Styles.form}>
            <Text style={Styles.label}>Food truck name:</Text>
            <TextInput
              style={Styles.input}
              value={food_truck}
              onChangeText={setFoodTruck}
            />
            <Text style={Styles.label}>Author:</Text>
            <TextInput
              style={Styles.input}
              value={author}
              onChangeText={setAuthor}
            />
            <Text style={Styles.label}>Rating:</Text>
            <TextInput
              style={Styles.input}
              value={rating}
              onChangeText={setRating}
            />
            <Text style={Styles.label}>Desc:</Text>
            <TextInput
              style={Styles.input}
              value={desc}
              onChangeText={setDesc}
            />
            <Button
              title="Submit"
              onPress={handleSubmitReview}
            />
          </View>
        </View>

        {/* IF YOU DISPLAY THIS REMEMBER TO DISPLAY THE AUTHOR */}

      </View>
    );
}