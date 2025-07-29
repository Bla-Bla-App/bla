import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View, Text, Image ,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './AppCss';

import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import RegisterScreen from './src/screens/RegisterScreen/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import BookingScreen from './src/screens/BookingScreen/BookingScreen';
import PaymentScreen from './src/screens/PaymentScreen/PaymentScreen';
import ContactScreen from './src/screens/ContactScreen/ContactDetailsScreen';
import DsiplayScreen from './src/screens/DisplayScreen/DisplayScreen';
import FeedBackScreen from './src/screens/FeedbackScreen/FeedBackScreen';



import MenuScreen from './src/screens/MenuScreen/MenuScreen';
import EditProfileScreen from './src/screens/EditProfileScreen/EditProfileScreen';
import { Video } from 'expo-av';
import carVideo from './assets/car.mp4';

const Drawer = createDrawerNavigator();


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1}}>
  
      <View style={{ padding: 20, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
  <View style={{ position: 'relative' }}>
    <Image
      source={{ uri: 'https://i.pravatar.cc/150?img=56' }}

      style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 10 }}
    />
    <TouchableOpacity
      onPress={() => alert('Edit Image')}
      style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 2,
      }}
    >
      <Icon name="create-outline" size={18} color="black" />
    </TouchableOpacity>
  </View>
  <Text style={{ fontWeight: 'bold', fontSize: 18 }}>D Ismail</Text>
  <Text style={{ color: 'gray' }}>⭐ 5.00 My Rating</Text>
</View>


      
      {/* <DrawerItem label="Menu" icon={() => <Icon name="menu" size={25} />} onPress={() => props.navigation.navigate('Menu')} /> */}
      <DrawerItem label="Home" icon={() => <Icon name="home" size={25} />} onPress={() => props.navigation.navigate('Home')} />
      <DrawerItem label="Profile" icon={() => <Icon name="person" size={25} />} onPress={() => props.navigation.navigate('Profile')} />
      <DrawerItem label="Register" icon={() => <Icon name="person-add" size={25} />} onPress={() => props.navigation.navigate('Register')} />
      <DrawerItem label="Login" icon={() => <Icon name="log-in" size={25} />} onPress={() => props.navigation.navigate('Login')} />
      <DrawerItem label="Booking" icon={() => <Icon name="calendar" size={25} />} onPress={() => props.navigation.navigate('Booking')} />
      <DrawerItem label="Payment" icon={() => <Icon name="card" size={25} />} onPress={() => props.navigation.navigate('Payment')} />
      <DrawerItem label="Contact" icon={() => <Icon name="call" size={25} />} onPress={() => props.navigation.navigate('Contact')} />
      <DrawerItem label="Display" icon={() => <Icon name="eye" size={25} />} onPress={() => props.navigation.navigate('Display')} />
      <DrawerItem label="Feedback" icon={() => <Icon name="chatbubbles" size={25} />} onPress={() => props.navigation.navigate('Feedback')} />
      <DrawerItem label="Edit Profile" icon={() => <Icon name="create" size={25} />} onPress={() => props.navigation.navigate('EditProfile')} />
    </DrawerContentScrollView>
  );
}

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
      <Drawer.Navigator
        initialRouteName="Menu"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: 'white',
            borderRadius: 10,
          },
          drawerActiveTintColor: 'black',
          drawerInactiveTintColor: 'black',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          drawerLabelStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Drawer.Screen name="Menu" component={MenuScreen} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Register" component={RegisterScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Booking" component={BookingScreen} />
        <Drawer.Screen name="Payment" component={PaymentScreen} />
        <Drawer.Screen name="Contact" component={ContactScreen} />
        <Drawer.Screen name="Display" component={DsiplayScreen} />
        <Drawer.Screen name="Feedback" component={FeedBackScreen} />
        <Drawer.Screen name="EditProfile" component={EditProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
