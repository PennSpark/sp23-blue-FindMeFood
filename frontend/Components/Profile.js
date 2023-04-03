import { View, Text, Pressable } from 'react-native';
import Styles from './Styles.js';
import Button from './Button.js';

import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome.js'

export default function Profile() {
    const navigation = useNavigation();

    return (
      <View>
        <Pressable onPress={() =>
            navigation.navigate('Home')
        }>
            <FontAwesome name="arrow-left" style={Styles.side_icon} />
        </Pressable>

        <Text style={Styles.text}>PROFILE PAGE COMPONENT</Text>
      </View>
    );
}