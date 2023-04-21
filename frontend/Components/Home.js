import { View, Text, Pressable } from 'react-native';
import Styles from './Styles.js';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';

import Ionicons from '@expo/vector-icons/Ionicons.js';  

import MapView, { Marker } from 'react-native-maps';
import { requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location';
import * as Location from 'expo-location';

import { getFormData } from './api.js';

export default function Home() {
    const navigation = useNavigation();

    const [region, setRegion] = useState(null);
    const [location, setLocation] = useState(null);

    const [foodTrucks, setFoodTrucks] = useState([]);

    const [data, setData] = useState([]);

    const fetchDataFoodTruck = async () => {
      const response = await getFormData('/get-foodtruck/');
      if (response && Array.isArray(response)) {
        setData(response);
      }
    };

    useEffect(() => {
      (async () => {
        const { granted } = await requestForegroundPermissionsAsync();
  
        if (granted) {
          const location = await watchPositionAsync(
            {
              accuracy: Location.Accuracy.BestForNavigation,
              timeInterval: 1000,
              distanceInterval: 10
            },
            (location) => {
              setLocation(location);
            }
          );
          setRegion({
            latitude: location.coords?.latitude,
            longitude: location.coords?.longitude,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5
          });
        }
      })();

      fetchDataFoodTruck();

      const foodTrucksData = [
        { id: 1, name: "Lyn's", latitude: 39.950350, longitude: -75.196970 },
      ];
      setFoodTrucks(foodTrucksData);


      /* 
      
      ALSO MAKE THE MAP SO IT DOESN'T INSTANTLY FOLLOW USER LOCATION

      TO ADD, YOU WILL HAVE TO RESTRUCTURE DATABASE

      const foodTrucksData = data.map(foodTruck => ({
        id: foodTruck.id,
        name: foodTruck.name,
        latitude: foodTruck.latitude,
        longitude: foodTruck.longitude,
      }));
      */

    }, []);

    return (
      <View position='absolute' height='80%' width='90%'>

        <Pressable onPress={() =>
                navigation.navigate('Profile', {name: 'Jane'})
          }>
                <Ionicons style={Styles.side_icon} name="person-circle-outline" />
        </Pressable>        
          
        <Text style={Styles.text}>HOME PAGE COMPONENT</Text>

        {region && location && location.coords && (
        <MapView style={Styles.map}
          initialRegion={region}
          showsUserLocation={true}
          followsUserLocation={true}
        >
          <Marker coordinate={location.coords} />
          {foodTrucks.map(foodTruck => (
            <Marker
              key={foodTruck.id}
              coordinate={{ latitude: foodTruck.latitude, longitude: foodTruck.longitude }}
              title={foodTruck.name}
            />
          ))}
        </MapView>
        )}

      </View>
    );
    
    
    
}