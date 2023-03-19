import { StatusBar, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Styles from './Styles.js';
import Navbar from './Navbar.js';

export default function BgNavFrame({subpage}) {
    return (
      <View style={Styles.container}>
        <LinearGradient
          // Background Linear Gradient
          colors={['rgba(49, 47, 63, 1.0)', 'transparent']}
          style={Styles.background}
          locations={[0.01, 0.9]}
        />
      
        {subpage}
        <Navbar></Navbar>

        <StatusBar style="auto" />
      </View>
    );
}