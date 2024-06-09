import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from '../Components/DetailScreen';
import ProductScreen from '../Components/ProductScreen';
import DetailProductScreen from '../Components/DetailProductScreen';
import DetailList from '../Components/DetailList';

const Stack = createNativeStackNavigator();
function HomeStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="ProductScreen" component={ProductScreen} />
            <Stack.Screen name="DetailProductScreen" component={DetailList} />
        </Stack.Navigator>
    )
}

export default HomeStack