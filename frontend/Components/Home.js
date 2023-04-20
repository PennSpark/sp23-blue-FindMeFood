import { View, Text, Pressable } from 'react-native';
import Styles from './Styles.js';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';

import * as Location from 'expo-location';

import Ionicons from '@expo/vector-icons/Ionicons.js';  

import MapView from 'react-native-maps';
import Marker from 'react-native-maps';

export default function Home() {
    const navigation = useNavigation();

    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
      (async () => {
        // permissions check
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          // do something when permission is denied
          return;
        }
  
        const location = await Location.getCurrentPositionAsync();
        setUserLocation(location);
      })()
    }, []);

    return (
      <View position='absolute' height='80%' width='90%'>

        <Pressable onPress={() =>
                navigation.navigate('Profile', {name: 'Jane'})
          }>
                <Ionicons style={Styles.side_icon} name="person-circle-outline" />
        </Pressable>        
          
        <Text style={Styles.text}>HOME PAGE COMPONENT</Text>

        <MapView 
          style={Styles.map} 
          >
          {userLocation && <Marker coordinate={userLocation.coords} />}
        </MapView>

      </View>
    );
    
    
    
}