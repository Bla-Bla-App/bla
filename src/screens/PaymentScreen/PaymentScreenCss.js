import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    marginBottom: 12,
    marginTop: 8,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
    color: '#333',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 14,
    marginBottom: 12,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 2,
  },
  appLogo: {
    width: 28,
    height: 28,
    marginRight: 12,
    resizeMode: 'contain',
  },
  optionText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
  },
  subText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#dcdcdc',
    marginVertical: 12,
  },

  qrContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 2,
  },
  qrHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  qrIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    resizeMode: 'contain',
  },
  simplContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 2,
  },


  defaultContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  tagContainer: {
  flexDirection: 'row',       // Align children horizontally
  alignItems: 'center',       // Center vertically
  backgroundColor: '#f0f2f5',
  borderRadius: 20,
  paddingVertical: 6,
  paddingHorizontal: 10,
  alignSelf: 'flex-start',    // Align container to left
},
tagIcon: {
  width: 16,
  height: 16,
  marginRight: 4,             // Space between icon and text
  resizeMode: 'contain',
},
tagText: {
  fontSize: 12,
  color: '#555',
},
});

export default styles;
