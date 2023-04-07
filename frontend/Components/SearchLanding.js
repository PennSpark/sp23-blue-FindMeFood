import { View, Text, Pressable, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Styles from './Styles.js';
import FontAwesome from '@expo/vector-icons/FontAwesome.js';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5.js';
import MaterialIcons from '@expo/vector-icons/MaterialIcons.js';

import { useNavigation } from '@react-navigation/native';

export default function SearchLanding() {
    const navigation = useNavigation();

    return (
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
            <FontAwesome name="arrow-left" style={Styles.side_icon} />
        </Pressable>

        <Text style={Styles.text}>SearchLandingPage</Text>


        <View style={Styles.nav_flexbox}>
            <Pressable onPress={() =>
                navigation.navigate('SearchUser')
            }>
                <FontAwesome5 name="users" style={Styles.side_icon} />
                <Text style={Styles.text}>Search users</Text>
            </Pressable>
            
            <Pressable onPress={() =>
                navigation.navigate('SearchFoodTruck')
            }>
                <FontAwesome name="truck" style={Styles.side_icon} />
                <Text style={Styles.text}>Search food trucks</Text>
            </Pressable>
            {/*<Button></Button>*/}
        </View>

      </View>
    );
}