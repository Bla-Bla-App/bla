import React from 'react';
import { View, Text } from 'react-native';
import styles from './TaxiInfoScreen'; // 👈 Import the external stylesheet

const TaxiInfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚖 Taxi Service Update</Text>
      <Text>This page provides all the latest info about taxi services.</Text>
    </View>
  );
};

export default TaxiInfoScreen;
