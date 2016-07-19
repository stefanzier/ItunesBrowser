import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  
  content: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    paddingTop: 65
  },

  appearance: {
    backgroundColor: '#2A3744',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row'
  },

  title: {
    color: '#FEFEFE',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1
  },

  button: {
    width: 50,
    color: '#FEFEFE',
    textAlign: 'center'
  },

  searchBar: {
    padding: 3,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },

  searchBarInput: {
    fontSize: 15,
    flex: 1,
    height: 30
  }  
});