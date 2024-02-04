import React, { useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

import MapViewer from './MapViewer';

const Item = ({ item, onPress, backgroundColor, textColor, isSelected }) => {

    if (isSelected) {

        return (
            <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
                <Text style={[styles.mac, { color: textColor }]}>{item.mac}</Text>
                <Text style={[styles.mac, { color: textColor }]}>{item.client}</Text>
                <Text style={[styles.mac, { color: textColor }]}>{item.description}</Text>
                <MapViewer installedSystems={[item]} />
            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
                <Text style={[styles.mac, { color: textColor }]}>{item.mac}</Text>
            </TouchableOpacity>
        );
    }
};



export default function AssetList({ installedSystems }) {
    const [selectedId, setSelectedId] = useState();

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={backgroundColor}
                textColor={color}
                isSelected={item.id == selectedId ? true : false}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={installedSystems}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    mac: {
        fontSize: 24,
    },
});