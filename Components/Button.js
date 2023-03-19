import { Text, Pressable } from 'react-native';
import Styles from './Styles.js'

export default function Button(props) {
    const { onPress, title = 'Save' } = props;
    return (
      <Pressable style={Styles.button} onPress={onPress}>
        <Text style={Styles.text}>{title}</Text>
      </Pressable>
    );
}
