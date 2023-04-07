import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BgNavFrame from './Components/BgNavFrame.js';
import SearchPage from './Components/SearchPage.js';
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
          name='Search' 
          component={SearchScreen} 
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
const SearchScreen = ({navigation}) => {
  return (
    <SearchPage/>
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

