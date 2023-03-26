import { View, Text, Pressable } from 'react-native';
import Styles from './Styles.js';
import Button from './Button.js';

import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome.js'

export default function FoodTruckPage() {
    const navigation = useNavigation();

    eturn (
        <View style={Styles.container}>
          <LinearGradient
            // Background Linear Gradient
            colors={['rgba(49, 47, 63, 1.0)', 'transparent']}
            style={Styles.background}
            locations={[0.01, 0.9]}
          />
  
          <Pressable onPress={() =>
              navigation.navigate('Home')
          }>
              <FontAwesome name="arrow-left" size='50%' color='white' />
          </Pressable>
  
          <Text style={Styles.text}>Food Truck Profile Page!</Text>
        </View>
      );

}