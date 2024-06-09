import React from 'react'
import { View, Text, Button } from 'react-native'
import DetailList from './DetailList'

function DetailProductScreen() {
    return (
        // <View>
        //     <Text>Detail Product Screen</Text>
        //     <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        //     <Button title="Go to Details... again" onPress={() => navigation.push('DetailProductScreeen')} />
        //     <Button title="Go back" onPress={() => navigation.goBack()} />
        //     <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
        // </View>

        <DetailList />
    )
}

export default DetailProductScreen