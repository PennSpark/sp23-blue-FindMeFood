import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BgNavFrame from './Components/BgNavFrame.js';
import SearchLanding from './Components/SearchLanding.js';
import SearchUser from './Components/SearchUser.js';
import SearchFoodTruck from './Components/SearchFoodTruck.js';
import PostsLanding from './Components/PostsLanding.js';
import AddFoodTruck from './Components/AddFoodTruck.js';
import ReviewWriteup from './Components/ReviewWriteup.js'
import Home from './Components/Home.js';
import Profile from './Components/Profile.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animation: 'none' }}>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Profile'
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name='PostsLanding' 
          component={PostsLandingScreen} 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name='AddFoodTruck' 
          component={AddFoodTruckScreen} 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name='ReviewWriteup' 
          component={ReviewWriteupScreen} 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name='SearchLanding' 
          component={SearchLandingScreen} 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name='SearchFoodTruck' 
          component={SearchFoodTruckScreen} 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name='SearchUser' 
          component={SearchUserScreen} 
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({navigation}) => {
  return (
    <BgNavFrame subpage={Home()}/>
  );
};
const ProfileScreen = ({navigation, route}) => {
  return (
    <BgNavFrame subpage={Profile()}/>
  );
}; 
const SearchLandingScreen = ({navigation}) => {
  return (
    <SearchLanding/>
  );
};
const SearchUserScreen = ({navigation}) => {
  return (
    <SearchUser/>
  );
};
const SearchFoodTruckScreen = ({navigation}) => {
  return (
    <SearchFoodTruck/>
  );
};
const PostsLandingScreen = ({navigation}) => {
  return (
    <PostsLanding/>
  );
};
const AddFoodTruckScreen = ({navigation}) => {
  return (
    <AddFoodTruck/>
  );
};
const ReviewWriteupScreen = ({navigation}) => {
  return (
    <ReviewWriteup/>
  );
};

