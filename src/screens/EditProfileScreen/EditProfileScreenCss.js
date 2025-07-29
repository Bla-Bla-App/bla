import { StyleSheet } from 'react-native';
import { Keyframe } from 'react-native-reanimated';


export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: '600',
    paddingLeft: 10,
    paddingTop: 10,
  },
  avatarimg: {
    width: 120,
    height: 120,
    borderRadius: 75,
    marginBottom: 12,
    padding: 10,
    alignSelf: 'center',
    marginTop: 20,
    
  },
 load: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderColor: 'red',
    borderWidth: 9,
    borderTopColor: 'transparent', 
    backgroundColor: 'transparent',
    position: 'absolute',
    top: '45%',
    left: '41%',
    borderStyle:'dotted',
  },

  loadcome:{
   backgroundColor:'grey',
  },
  input: {
    height: 40,
    borderColor: '#aaa',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    padding: 10,
    
  },
  backButton:{
    marginTop: 20,
    padding: 12,
    justifyContent: 'center',
    color: 'white',
    backgroundColor: '#2097ffff',
    borderRadius: 7,
    alignItems: 'center',
  backgroundColor: '#ff5f20ff',


  },
  saveButton:{
   marginTop: 20,
    padding: 12,
    justifyContent: 'center',
    color: 'white',
    borderRadius: 7,
    alignItems: 'center',
  backgroundColor: '#208fffff',

  },
 
backButtonText:{
  color: '#ffffff',
  textAlign: 'center',
  fontSize: 16,},
  saveButtonText: {
  color: '#ffffff',
  textAlign: 'center',
  fontSize: 16,
  }
// buttonContainer:{
//   flexDirection: 'row',
//   justifyContent: 'space-around',
// }
});
