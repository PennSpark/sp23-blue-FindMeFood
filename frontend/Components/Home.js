import { View, Text, Pressable, TextInput, FlatList, Button } from 'react-native';
import Styles from './Styles.js';
import { useNavigation } from '@react-navigation/native';

import Ionicons from '@expo/vector-icons/Ionicons.js';




import React, { useState, useEffect } from 'react';
import { postFormData, getFormData } from './api.js';
  


export default function Home() {
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
  
    const renderItem = ({ item }) => (
      <View style={Styles.item}>
        <Text>{item.name}</Text>
        <Text>{item.email}</Text>
        <Text>{item.message}</Text>
        <Text>{item.created_at}</Text>
      </View>
    );


    return (
      <View>

        <Pressable onPress={() =>
                navigation.navigate('Profile', {name: 'Jane'})
          }>
                <Ionicons style={Styles.side_icon} name="person-circle-outline" />
        </Pressable>        
          
        <Text style={Styles.text}>HOME PAGE COMPONENT</Text>

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