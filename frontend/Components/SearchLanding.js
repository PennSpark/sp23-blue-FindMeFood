import { View, Text, Pressable, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Styles from './Styles.js';
import FontAwesome from '@expo/vector-icons/FontAwesome.js';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5.js';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons.js';

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

        <Text style={Styles.text}>Search</Text>

        <View height='10%'/>


        <View>
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
                <Text style={Styles.text}>Registered food trucks</Text>
            </Pressable>

            <Pressable onPress={() =>
                navigation.navigate('SearchReview')
            }>
                <MaterialCommunityIcons name="comment-search" style={Styles.side_icon} />
                <Text style={Styles.text}>Recent reviews</Text>
            </Pressable>
            {/*<Button></Button>*/}
        </View>

      </View>
    );
}