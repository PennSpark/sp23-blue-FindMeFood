import { View, Pressable } from 'react-native';
import Styles from './Styles.js';
import { LinearGradient } from 'expo-linear-gradient';

import FontAwesome from '@expo/vector-icons/FontAwesome.js'

import { useNavigation } from '@react-navigation/native';

export default function Navbar() {
    function changeBackground(e) {
        {/*alert("Redirected Back Home!");*/}
        navigation.navigate('Home');
    }

    const navigation = useNavigation();
    
    return (
      <View style={Styles.nav}>
        <LinearGradient
        // Background Linear Gradient
        colors={['rgba(59, 57, 73, 1.0)', 'transparent']}
        style={Styles.nav_background}
        locations={[0.01, 0.4]}
        />
        
        <View style={Styles.nav_flexbox}>
            <Pressable onPress={() =>
                navigation.navigate('Search')
            }>
                <FontAwesome name="search" style={Styles.side_icon} />
            </Pressable>
            <View style={Styles.home_background}>
                <Pressable onPress={changeBackground}>
                    <FontAwesome name="home" style={Styles.main_icon}/>
                </Pressable>
            </View>
            <Pressable onPress={() =>
                navigation.navigate('Review Writeup')
            }>
                <FontAwesome name="star" style={Styles.side_icon} />
            </Pressable>
            {/*<Button></Button>*/}
        </View>

      </View>
    );
}