import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',  
    backgroundColor: '#fffff',
    
  },
  profileCard: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    elevation: 2,
    width: '85%',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  phone: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 6,
  },
  rating: {
    fontSize: 16,
    color: '#f1c40f',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
