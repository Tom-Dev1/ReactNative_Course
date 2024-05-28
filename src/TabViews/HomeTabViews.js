import React from 'react';
import { useWindowDimensions } from 'react-native';
import { View, Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';


const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);
//Tabs view
const HomeTabViews = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0); // biến hiển thị các tab
    const [routes] = React.useState([
        { key: 'music', title: 'Music' },
        { key: 'albums', title: 'Albums' },
    ]);
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={SceneMap({
                music: FirstRoute,
                albums: SecondRoute,
            })}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    );
}
export default HomeTabViews;
