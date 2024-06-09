import React from 'react'
import { View, Button } from 'react-native'

function ProductScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to Detail Product"
                onPress={() => navigation.navigate('DetailProductScreen')}
            />
        </View>
    )
}

export default ProductScreen