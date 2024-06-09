import { Button, Text, View } from "react-native";
import HomeTabViews from "../TabViews/HomeTabViews";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen() {
    //Storega
    const storeData = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value);
            console.log('Data is stored successfully');
        } catch (error) {
            console.log('Error loading data', error);
        }
    }
    //Get data
    const getData = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            console.log('Data is get successfully', value);
        } catch (error) {
            console.log('Error loading data', error);
        }
    }
    return (

        // <HomeTabViews />
        <View>
            <Button title="Storega Data"
                onPress={() => {
                    storeData('myName', 'thanhtt')
                }}>Home</Button>


            <Button title="Get Data"
                onPress={() => {
                    getData('myName')
                }}>GetData</Button>
        </View>
    );
}