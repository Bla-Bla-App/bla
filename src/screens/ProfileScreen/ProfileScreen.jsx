import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './ProfileScreenCss';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=56' }}
          style={styles.avatar}
        />
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <Text style={styles.name}>Ismail</Text>
        </TouchableOpacity>
        <Text style={styles.phone}>60000000023</Text>
        <Text style={styles.rating}>⭐ 5.00 My Rating</Text>
      </View>

      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
