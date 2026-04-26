import React from 'react';
import { StyleSheet, View } from 'react-native';
import InsightsScreen from './screens/InsightsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <InsightsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
