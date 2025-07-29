import React, { useState , useRef,useEffect} from 'react';
import { Animated,View, Text, TextInput, Button, TouchableOpacity,Image ,Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './EditProfileScreenCss';
import Icon from 'react-native-vector-icons/Ionicons';



const EditProfileScreen= () => {
  const navigation = useNavigation();

  const [name, setName] = useState('D Ismail');
  const [email, setEmail] = useState('ismail@example.com');
  const [gender, setGender] = useState('Male');
  const [dob, setDob] = useState('2000-01-01');
  const [load, setLoad] = useState(false);

 
  const spinAnim = useRef(new Animated.Value(0)).current;

useEffect(() => {
  if (load) {
    spinAnim.setValue(0); 
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear, 
        useNativeDriver: true,
      })
    ).start();
  }
}, [load]);

const spin = spinAnim.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg'],
});

     
  const handleSave = () => {
    
    setLoad(true);
    setTimeout(()=>{
setLoad(false);
alert('Profile Updated!');
    },5000)
    
  };

  return (
    <View style={load ? styles.loadcome : styles.exit}>
      
      {load ?
<Animated.View style={[styles.load, { transform: [{ rotate: spin }] }]}
      />
      : ''
      }<View>
      <Image source={{ uri: 'https://i.pravatar.cc/150?img=56' }}
              style={styles.avatarimg}/>
           <TouchableOpacity
                 onPress={() => alert('Edit Image')}
                 style={{
                   position: 'absolute',
                   bottom: 10,
                   right: 170,
                
                   backgroundColor: '#fff',
                   borderRadius: 12,
                   padding: 2,
                 }}
               >
                 <Icon name="create-outline" size={18} color="black" />
               </TouchableOpacity>
               </View>

      <Text style={styles.label}>Name:</Text>
      <TextInput value={name} onChangeText={setName}  placeholder="Name" style={styles.input} />

      <Text style={styles.label}>Email:</Text>
      <TextInput value={email} onChangeText={setEmail}  placeholder="Email" style={styles.input} />

      <Text style={styles.label}>Gender:</Text>
      <TextInput value={gender} onChangeText={setGender} placeholder="Gender" style={styles.input} />

      <Text style={styles.label}>Date of Birth:</Text>
      <TextInput value={dob} onChangeText={setDob} placeholder="Date of Birth" style={styles.input} />

      <View >
         <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Cancel</Text>
      </TouchableOpacity>

       
      </View>
      
    </View>
  );
};



export default EditProfileScreen;

