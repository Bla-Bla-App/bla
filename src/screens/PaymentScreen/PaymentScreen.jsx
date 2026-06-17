import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './PaymentScreenCss.js'; 

const gpayIcon = require('../../../assets/Payment-Icons/gpay.png');
const phonepeIcon = require('../../../assets/Payment-Icons/phonepe.png');
const qrIcon = require('../../../assets/Payment-Icons/qr.png');
const tagIcon = require('../../../assets/Payment-Icons/tag.png');
const simplIcon = require('../../../assets/Payment-Icons/simpl.png');
const cashIcon = require('../../../assets/Payment-Icons/cash.png'); 
const upiIcon = require('../../../assets/Payment-Icons/upi.png');



const PaymentScreen = () => {
  return (
    <ScrollView style={styles.container}>
   
   <View style={styles.section}>
         <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
    <Image source={upiIcon} style={{ width: 40, height: 25, marginRight: 8, resizeMode: 'contain' }} />
    <Text style={styles.sectionTitle}>Pay by any UPI app</Text>
  </View>


        
        <TouchableOpacity style={styles.option}>
          <Image source={gpayIcon} style={styles.appLogo} />
          <Text style={styles.optionText}>GPay</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Image source={phonepeIcon} style={styles.appLogo} />
          <Text style={styles.optionText}>PhonePe</Text>
        </TouchableOpacity>
      </View>

   
      <View style={styles.divider} />

     
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pay Later</Text>

   
        <TouchableOpacity style={styles.qrContainer}>
          <View style={styles.qrHeader}>
            <Image source={qrIcon} style={styles.qrIcon} />
            <Text style={styles.optionText}>Pay at drop</Text>
          </View>
          <Text style={styles.subText}>
            Go cashless, after ride pay by scanning QR code
          </Text>

     
          <View style={[styles.tagContainer, { marginTop: 8 }]}>
            <Image source={tagIcon} style={styles.tagIcon} />
            <Text style={styles.tagText}>Offer Available</Text>
          </View>
        </TouchableOpacity>   
        
      </View>

      
      <View style={styles.divider} />

      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Others</Text>
        <TouchableOpacity style={styles.option}>
          <Image source={cashIcon} style={styles.appLogo} />
          <Text style={styles.optionText}>Cash</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

export default PaymentScreen;

