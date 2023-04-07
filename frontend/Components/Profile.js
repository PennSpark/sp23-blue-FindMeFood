import { View, Text, Pressable, TextInput, FlatList, Button } from 'react-native';
import Styles from './Styles.js';

import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome.js'

import React, { useState, useEffect } from 'react';
import { postFormData, getFormData } from './api.js';

export default function Profile() {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [data, setData] = useState([]);

    const handleSubmitUser = async () => {
      const formData = { name, email, message };
      const response = await postFormData('/post-user/', formData);
      if (response && response.status === 'success') {
        alert('Form submitted successfully!');
        setName('');
        setEmail('');
        setMessage('');
        fetchDataUser();
      } else {
        alert('Form submission failed. Please try again.');
      }
    };
  
    const fetchDataUser = async () => {
      const response = await getFormData('/get-user/');
      if (response && Array.isArray(response)) {
        setData(response);
      }
    };
  
    useEffect(() => {
      fetchDataUser();
    }, []);

    return (
      <View position='absolute'>
        <Pressable onPress={() =>
            navigation.navigate('Home')
        }>
            <FontAwesome name="arrow-left" style={Styles.side_icon} />
        </Pressable>

        <Text style={Styles.text}>PROFILE PAGE COMPONENT (basically u can just register users here)</Text>

        <View style={Styles.form}>
          <Text style={Styles.label}>Name:</Text>
          <TextInput
            style={Styles.input}
            value={name}
            onChangeText={setName}
          />
          <Text style={Styles.label}>Email:</Text>
          <TextInput
            style={Styles.input}
            value={email}
            onChangeText={setEmail}
          />
          <Text style={Styles.label}>Message:</Text>
          <TextInput
            style={Styles.input}
            value={message}
            onChangeText={setMessage}
          />
          <Button
            title="Submit"
            onPress={handleSubmitUser}
          />
        </View>
      </View>
    );
}