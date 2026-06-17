
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../HomeScreen/HomeScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import RegisterScreen from '../RegisterScreen/RegisterScreen';
import LoginScreen from '../LoginScreen/LoginScreen';
import BookingScreen from '../BookingScreen/BookingScreen';
import PaymentScreen from '../PaymentScreen/PaymentScreen';
import ContactScreen from '../ContactScreen/ContactDetailsScreen';
import DsiplayScreen from '../DisplayScreen/DisplayScreen';
import FeedBackScreen from '../FeedbackScreen/FeedBackScreen';
import MenuScreen from '../MenuScreen/MenuScreen';
import EditProfileScreen from '../EditProfileScreen/EditProfileScreen';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
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
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Peter</Text>
        <Text style={{ color: 'gray' }}>⭐ 5.00 My Rating</Text>
      </View>

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

export default function DrawerStack() {
  return (
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
  );
}
