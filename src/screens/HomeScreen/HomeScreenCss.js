import { StyleSheet } from 'react-native';

export const images = {
  a: require('../../../assets/a.jpg'),
  b: require('../../../assets/b.jpg'),
  c: require('../../../assets/c.jpg'),
  d: require('../../../assets/d.jpg'),
  e: require('../../../assets/e.jpg'),
  f: require('../../../assets/f.jpg'),
  footer: require('../../../assets/footer.jpg'),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    backgroundColor: '#f9f9f9',
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },

  section: {
    paddingHorizontal: 16,
    marginTop: 10,
  },

  noResults: {
    padding: 10,
    fontSize: 14,
    color: '#888',
  },

  locationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    marginVertical: 6,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    alignItems: 'center',
  },

  locationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },

  subText: {
    fontSize: 13,
    color: '#666',
  },

  likeIcon: {
    fontSize: 20,
  },

  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 8,
    color: '#333',
  },

  exploreOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
  },

  exploreItem: {
    alignItems: 'center',
    backgroundColor: '#e6f2ff',
    padding: 12,
    borderRadius: 10,
    width: 100,
  },

  optionIcon: {
    fontSize: 24,
    marginBottom: 6,
  },

  optionLabel: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
  },

  banner: {
    margin: 16,
    backgroundColor: '#ffecd1',
    borderRadius: 10,
  },

  bannerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
  },

  bannerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },

  bannerLeft: {
    flex: 1,
  },

  bannerRight: {
    paddingLeft: 10,
  },

  carIcon: {
    fontSize: 30,
  },

  imageContainer: {
    marginRight: 12,
    position: 'relative',
  },

  placeImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },

  mapIcon: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 20,
    padding: 6,
  },

  footerContainer: {
    marginTop: 20,
    height: 180,
    position: 'relative',
  },

  footerBackground: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },

  footerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    //justifyContent: 'center',
    padding: 10,
    alignItems: 'flex-end',
    borderRadius: 10,
  },

  footerHashtag: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  footerInfo: {
    color: '#ddd',
    fontSize: 14,
  },
});

export default styles;
