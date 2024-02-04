import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AssetList from './components/AssetsList';

const installedSystems = require('./DevicesList.json');

export default function App() {
  return (
    <View style={styles.container}>

      <AssetList installedSystems={installedSystems} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
