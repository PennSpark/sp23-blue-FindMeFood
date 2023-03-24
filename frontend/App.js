import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BgNavFrame from './Components/BgNavFrame.js';
import SearchPage from './Components/SearchPage.js';
import ReviewWriteupPage from './Components/ReviewWriteupPage.js';
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
          name='Review Writeup' 
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
const ReviewWriteupScreen = ({navigation}) => {
  return (
    <ReviewWriteupPage/>
  );
};
