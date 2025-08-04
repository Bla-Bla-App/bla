import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  Linking,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles, { images } from './HomeScreenCss';

// Mock location data
const allLocations = [
  { title: '🕓 Kadugodi', subtitle: 'Railway station, Whitefield', lat: 12.986, lng: 77.728 },
  { title: '🚌 Majestic Bus Stand', subtitle: 'Kempegowda, Gandhi Nagar', lat: 12.9784, lng: 77.5726 },
  { title: '🏬 KLM Shopping Mall', subtitle: 'Marathahalli, Bengaluru', lat: 12.956, lng: 77.701 },
  { title: '🏞️ Cubbon Park', subtitle: 'Near Vidhana Soudha', lat: 12.9763, lng: 77.5929 },
  { title: '🏙️ Indiranagar', subtitle: 'Metro Station, Bengaluru', lat: 12.9719, lng: 77.6412 },
];

const openMap = (lat, lng) => {
  const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  Linking.openURL(url);
};

// Reusable Location Item
const LocationItem = ({ title, subtitle, onPress, liked, onLikeToggle }) => (
  <TouchableOpacity onPress={onPress} style={styles.locationItem}>
    <View>
      <Text style={styles.locationTitle}>{title}</Text>
      <Text style={styles.subText}>{subtitle}</Text>
    </View>
    {onLikeToggle ? (
      <TouchableOpacity onPress={onLikeToggle}>
        <Text style={styles.likeIcon}>{liked ? '❤️' : '🤍'}</Text>
      </TouchableOpacity>
    ) : (
      <Text style={{ fontSize: 20 }}>📍</Text>
    )}
  </TouchableOpacity>
);

// Explore Option
const ExploreOption = ({ icon, label, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.exploreItem}>
    <Text style={styles.optionIcon}>{icon}</Text>
    <Text style={styles.optionLabel}>{label}</Text>
  </TouchableOpacity>
);

// Horizontal Places Component
const Places = () => {
  const places = [
    { image: images.a, lat: 12.9716, lng: 77.5946 },
    { image: images.b, lat: 28.6139, lng: 77.2090 },
    { image: images.c, lat: 19.0760, lng: 72.8777 },
    { image: images.d, lat: 13.0827, lng: 80.2707 },
    { image: images.e, lat: 17.3850, lng: 78.4867 },
    { image: images.f, lat: 22.5726, lng: 88.3639 },
  ];

  return (
    <View style={{ marginBottom: 20 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingLeft: 16 }}>
        {places.map((item, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={item.image} style={styles.placeImage} />
            <TouchableOpacity style={styles.mapIcon} onPress={() => openMap(item.lat, item.lng)}>
              <Ionicons name="location-sharp" size={24} color="white" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLocations = allLocations.filter(loc =>
    loc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    loc.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      {/* 🔍 Search Bar */}
      <TouchableOpacity
  style={styles.searchWrapper}
  onPress={() => navigation.navigate('Booking', { location: { title: searchQuery || 'Unknown location', subtitle: '' } })}
  activeOpacity={0.8}
>
  <Text style={{ fontSize: 20 }}>🔍</Text>
  <Text style={[styles.input, { color: '#999', paddingTop: 10 }]}>
    {searchQuery || 'Where are you going?'}
  </Text>
</TouchableOpacity>


      {/* 📍 Location Results */}
      <View style={styles.section}>
        {filteredLocations.length > 0 ? (
          filteredLocations.map((loc, index) => (
            <LocationItem
              key={index}
              title={loc.title}
              subtitle={loc.subtitle}
              onPress={() => openMap(loc.lat, loc.lng)}
            />
          ))
        ) : (
          <Text style={styles.noResults}>No locations match your search.</Text>
        )}
      </View>

      {/* ✨ Explore Options */}
      <Text style={styles.heading}>Explore</Text>
      <View style={styles.exploreOptions}>
        <ExploreOption icon="🚕" label="Car AC" onPress={() => Alert.alert('Car with AC')} />
        <ExploreOption icon="📦" label="Car with Parcel" onPress={() => Alert.alert('Car with Parcel')} />
        <ExploreOption icon="🚗" label="Car Non AC" onPress={() => Alert.alert('Car Non AC')} />
      </View>

      {/* 📢 Banner */}
      <View style={styles.banner}>
        <TouchableOpacity onPress={() => navigation.navigate('TaxiInfo')} style={styles.bannerContent}>
          <View style={styles.bannerLeft}>
            <Text style={styles.bannerText}>Update on car{"\n"}Taxi service</Text>
          </View>
          <View style={styles.bannerRight}>
            <Text style={styles.carIcon}>🚗</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* 🌆 Places Gallery */}
      <Text style={styles.heading}>Go Places with Bla Bla</Text>
      <Places />

      {/* 👣 Footer */}
      <View style={styles.footerContainer}>
        <Image source={images.footer} style={styles.footerBackground} resizeMode="cover" />
        <View style={styles.footerOverlay}>
          <Text style={styles.footerHashtag}>#goBlaBla</Text>
          <Text style={styles.footerInfo}>🇮🇳 Made for India</Text>
          <Text style={styles.footerInfo}>❤️ Crafted in Bengaluru</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
