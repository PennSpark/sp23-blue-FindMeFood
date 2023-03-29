import { View, Text, Pressable } from 'react-native';
import Styles from './Styles.js';
import { useNavigation } from '@react-navigation/native';

import Ionicons from '@expo/vector-icons/Ionicons.js';

import { useState } from 'react';
import axios from 'axios';

export default function Home() {
    const navigation = useNavigation();

    const [posts, setPosts] = useState([]);

    useEffect( () => {
      axios.get("http://127.0.0.1:8000/splash/").then((res) => {
        setPosts(res.data)
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      });
    }, []);

    return (
      <View>
        <Pressable onPress={() =>
                navigation.navigate('Profile', {name: 'Jane'})
            }>
                <Ionicons name="person-circle-outline" size='50%' color='white' />
          </Pressable>

        {posts.map((post) => {
          <Text>Username: {post.username}</Text>
        })}
        
        <Text style={Styles.text}>HOME PAGE COMPONENT</Text>
      </View>
    );
    
}