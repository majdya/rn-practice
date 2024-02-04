import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function MapViewer({ installedSystems }) {

    console.log("installedSystems:", installedSystems);
    console.log("installedSystems:", installedSystems[0].location);

    const onRegionChange = (region) => {
        console.log(region);
    };

    const showInstalledSystems = () => {

        return installedSystems.map((item, index) => {

            return (
                <Marker
                    key={index}
                    coordinate={item.location}
                    title={item.title}
                    description={item.description}
                    pinColor='#3D88A9BE'
                />
            );
        }
        );
    };
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                onRegionChange={onRegionChange}
                onLayout={this.onMapReady}
                initialRegion={installedSystems[0].location}
            >
                {showInstalledSystems()}</MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 300

    },
    map: {
        width: '100%',
        height: '50%',
    },
});