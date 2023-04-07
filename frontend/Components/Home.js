import { View, Text, Pressable, TextInput, FlatList, Button } from 'react-native';
import Styles from './Styles.js';
import { useNavigation } from '@react-navigation/native';

import Ionicons from '@expo/vector-icons/Ionicons.js';




import React, { useState, useEffect } from 'react';
import { postFormData, getFormData } from './api.js';
  


export default function Home() {
    const navigation = useNavigation();

    return (
      <View position='absolute'>

        <Pressable onPress={() =>
                navigation.navigate('Profile', {name: 'Jane'})
          }>
                <Ionicons style={Styles.side_icon} name="person-circle-outline" />
        </Pressable>        
          
        <Text style={Styles.text}>HOME PAGE COMPONENT</Text>

      </View>
    );
    
    
    
}