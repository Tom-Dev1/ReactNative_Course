import { FlatList, View, Text } from "react-native";

import React from 'react'

const data = [
    { id: '1', title: 'Title 1', },
    { id: '2', title: 'Title 2', },
    { id: '3', title: 'Title 3', },
    { id: '4', title: 'Title 4', },
    { id: '5', title: 'Title 5', },
    { id: '6', title: 'Title 6', },
    { id: '7', title: 'Title 7', },
    { id: '8', title: 'Title 8', },
    { id: '9', title: 'Title 9', },
    { id: '10', title: 'Title 10', },
    { id: '11', title: 'Title 11', },
    { id: '12', title: 'Title 12', },
]
const renderItems = ({ item }) => {
    <View style={{ padding: 20 }}>
        <Text>{item.title}</Text>
    </View>
}

function DetailList() {
    return (
        <FlatList
            data={data}
            renderItem={renderItems}
        />
    );
}
export default DetailList