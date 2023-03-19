import { View, Text, Pressable } from 'react-native';
import Styles from './Styles.js';
import { useNavigation } from '@react-navigation/native';

import Ionicons from '@expo/vector-icons/Ionicons'

export default function Home() {
    const navigation = useNavigation();

    return (
      <View>
        <Pressable onPress={() =>
                navigation.navigate('Profile', {name: 'Jane'})
            }>
                <Ionicons name="person-circle-outline" size='50' color='white' />
          </Pressable>
        <Text style={Styles.text}>HOME PAGE COMPONENT</Text>
      </View>
    );
}