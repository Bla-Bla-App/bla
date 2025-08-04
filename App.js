// App.jsx

import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Video } from 'expo-av';

import carVideo from './assets/car.mp4';
import styles from './AppCss';
import DrawerStack from './src/screens/DrawerStack/drawerstack';
export default function App() {
  const [startingValue, setStartingValue] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartingValue(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  if (startingValue) {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.home}>
            <Video
              source={carVideo}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="contain"
              shouldPlay
              isLooping
              style={{ width: '100%', height: 300 }}
            />
            <StatusBar style="auto" />
          </View>
        </View>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  );
}
