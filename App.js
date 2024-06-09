import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailScreen from './src/Components/DetailScreen';
import HomeScreen from './src/Components/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeStack from './src/Stacks/HomeStack';

import AsyncStorage from '@react-native-async-storage/async-storage';

//Stack Navigator
const Tab = createBottomTabNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Detail') {
              iconName = 'info-circle';
            }
            // You can return any component that you like here!
            return <Icon name={iconName} size={25} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Detail" component={DetailScreen} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}