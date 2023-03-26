import { View, Text, Pressable, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Styles from './Styles.js';

import { useNavigation } from '@react-navigation/native';

export default function ReviewWriteupPage() {
    const navigation = useNavigation();

    return (
      <View style={styles.container}>
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

        <Text style={Styles.text}>REVIEW WRITEUP PAGE</Text>
      </View>
    );

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'left',
      },
      text: {
        fontSize: 14,
      },
      wrapperCustom: {
        borderRadius: 8,
        padding: 6,
      },
     
    });
}